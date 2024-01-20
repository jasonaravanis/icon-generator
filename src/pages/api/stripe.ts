import { env } from "@env";
import { runMiddleware } from "@utils/run-middleware";
import Cors from "cors";
import {
  type NextConfig,
  type NextApiRequest,
  type NextApiResponse,
} from "next";
import Stripe from "stripe";

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
    const event = stripe.webhooks.constructEvent(
      buf.toString(),
      sig,
      env.STRIPE_WEBHOOK_SECRET
    );
    if (!permittedEvents.includes(event.type))
      throw new Error(`Invalid webhook event. Recieved ${event.type}`);
    switch (event.type) {
      case "checkout.session.completed":
        console.log("~~~~~RECIEVED A VALID WEBHOOK EVENT AND SHOULD UPDATE DB");
    }
    res.status(200);
    res.end();
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    if (err! instanceof Error) console.log(err);
    console.log(`❌ Error message: ${errorMessage}`);
    res.status(400);
    res.json({ message: `Webhook Error: ${errorMessage}` });
  }
};

export default webhook;
