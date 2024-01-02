import Stripe from "stripe";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { env } from "~/env.mjs";

const stripe = new Stripe(env.STRIPE_SECRET_KEY);

export const checkoutRouter = createTRPCRouter({
  createCheckout: protectedProcedure.mutation(async ({ ctx }) => {
    return await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      metadata: {
        userId: ctx.session.user.id,
      },
      success_url: env.HOST_NAME,
      cancel_url: env.HOST_NAME,
      line_items: [{ price: env.STRIPE_PRICE_ID, quantity: 1 }],
    });
  }),
});
