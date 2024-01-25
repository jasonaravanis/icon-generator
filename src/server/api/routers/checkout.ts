import { createTRPCRouter, protectedProcedure } from "@server/api/trpc";
import Stripe from "stripe";
import { env } from "@env";
import * as z from "zod";
import { productList, productIdsList } from "@server/productList";

const stripe = new Stripe(env.STRIPE_SECRET_KEY);

export const checkoutRouter = createTRPCRouter({
  getCheckoutUrl: protectedProcedure
    .input(
      z.object({
        productId: z.enum(productIdsList),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const stripeProduct = productList.find(
        (prod) => prod.id === input.productId
      );

      if (!stripeProduct?.stripeProductKey)
        throw new Error("Could not find stripe product key");

      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: stripeProduct.stripeProductKey,
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${env.HOST_NAME}/?success=true`,
        cancel_url: `${env.HOST_NAME}/?canceled=true`,
        metadata: {
          userId: ctx.session.user.id,
          credits: stripeProduct.credits,
          productId: input.productId,
        },
      });
      return session.url;
    }),
});
