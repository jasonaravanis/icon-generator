import type { NextApiRequest, NextApiResponse, NextConfig } from "next";
import Stripe from "stripe";
import { env } from "~/env.mjs";
import { buffer } from "micro";
import { prisma } from "~/server/db";

const stripe = new Stripe(env.STRIPE_SECRET_KEY);

export const config: NextConfig = {
  api: {
    bodyParser: false,
  },
};

const webhook = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const signature = req.headers["stripe-signature"] as string;
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(
        buf,
        signature,
        env.STRIPE_WEBHOOK_SECRET
      );

      switch (event.type) {
        case "checkout.session.completed":
          const completedEvent = event.data
            .object as Stripe.Checkout.Session & {
            metadata: { userId: string };
          };

          await prisma.user.update({
            where: {
              id: completedEvent.metadata.userId,
            },
            data: {
              credits: {
                increment: 100,
              },
            },
          });
          break;
        default:
          throw new Error(`Unhandled event type ${event.type}`);
      }
      res.json({ recieved: true });
    } catch (err) {
      let message = "Unknown Error";
      if (err instanceof Error) message = err.message;
      res.status(400).send(`Webhook Error: ${message}`);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default webhook;
