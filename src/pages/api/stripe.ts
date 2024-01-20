import { env } from "@env";
import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

type ResponseData = {
  message: string;
};

type Error = {
  statusCode?: number;
  message: ResponseData;
};

const stripe = new Stripe(env.STRIPE_SECRET_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: env.STRIPE_PRICE_KEY,
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${env.HOST_NAME}/?success=true`,
        cancel_url: `${env.HOST_NAME}/?canceled=true`,
      });
      if (session?.url) {
        res.redirect(303, session.url);
      } else {
        throw new Error("Could not create stripe checkout");
      }
    } catch (err: unknown) {
      const error = err as Error;
      res.status(error?.statusCode ?? 500);
      res.json(error.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
