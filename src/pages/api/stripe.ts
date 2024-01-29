import { env } from "@env";

import { runMiddleware } from "@/lib/run-middleware";
import Cors from "cors";
import {
  type NextConfig,
  type NextApiRequest,
  type NextApiResponse,
} from "next";
import Stripe from "stripe";
import { db } from "@server/db";

type MetaData = {
  userId: string;
  credits: number;
};

type StripCheckoutSessionWithMetaData = Stripe.Checkout.Session & {
  metadata: MetaData;
};

const stripe = new Stripe(env.STRIPE_SECRET_KEY);

/*
 * Disabling CORS to allow external stripe server to access this API.
 * Still safe because webhook will only approve event if validated using stripe webhook secret
 */
const cors = Cors({
  origin: "*",
  methods: ["POST", "HEAD"],
});

export const config: NextConfig = {
  api: {
    bodyParser: false,
  },
};

const buffer = (req: NextApiRequest) => {
  return new Promise<Buffer>((resolve, reject) => {
    const chunks: Buffer[] = [];

    req.on("data", (chunk: Buffer) => {
      chunks.push(chunk);
    });

    req.on("end", () => {
      resolve(Buffer.concat(chunks));
    });

    req.on("error", reject);
  });
};

const permittedEvents: string[] = ["checkout.session.completed"];

const webhook = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors);
  if (req.method !== "POST") {
    res.status(405);
    res.end();
  }
  try {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"];
    if (!sig) throw new Error("Missing stripe-signature header");
    // constructEvent will throw an error if the stripe event is not authentic
    const event = stripe.webhooks.constructEvent(
      buf.toString(),
      sig,
      env.STRIPE_WEBHOOK_SECRET,
    );
    if (!permittedEvents.includes(event.type))
      throw new Error(`Invalid webhook event. Recieved ${event.type}`);
    /**
     * At this point we can safely say the request is valid.
     * Stripe best practices state a 200 status code should be quickly sent before complex logic takes place
     * https://stripe.com/docs/webhooks#best-practices
     */
    res.status(200);
    res.end();
    switch (event.type) {
      case "checkout.session.completed":
        const checkoutSession = event.data
          .object as StripCheckoutSessionWithMetaData;

        await db.user.update({
          where: {
            id: checkoutSession.metadata.userId,
          },
          data: {
            credits: {
              increment: Number(checkoutSession.metadata.credits),
            },
          },
        });
    }
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    if (err! instanceof Error) console.log(err);
    console.log(`❌ Error message: ${errorMessage}`);
    res.status(400);
    res.json({ message: `Webhook Error: ${errorMessage}` });
  }
};

export default webhook;
