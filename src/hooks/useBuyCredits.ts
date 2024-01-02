import { loadStripe } from "@stripe/stripe-js";
import { env } from "~/env.mjs";
import { api } from "~/utils/api";

const stripe = await loadStripe(env.NEXT_PUBLIC_STRIPE_KEY);

export function useBuyCredits() {
  const checkout = api.checkout.createCheckout.useMutation();
  return {
    buyCredits: async () => {
      const response = await checkout.mutateAsync();

      await stripe?.redirectToCheckout({
        sessionId: response.id,
      });
    },
  };
}
