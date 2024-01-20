import { createTRPCRouter, protectedProcedure } from "@server/api/trpc";
import Stripe from "stripe";
import { env } from "@env";

const stripe = new Stripe(env.STRIPE_SECRET_KEY);

export const checkoutRouter = createTRPCRouter({
  getCheckoutUrl: protectedProcedure.query(async () => {
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
    return session.url;
  }),
});
