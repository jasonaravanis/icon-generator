import { env } from "@env";

const productList = [
  {
    id: "100_credits",
    stripeProductKey: env.STRIPE_PRODUCT_100_CREDITS,
    credits: 100,
  },
] as const;

type ProductId = (typeof productList)[number]["id"];

const productIdsList: [ProductId, ...ProductId[]] = [
  /**
   * zod enum requires an array of strings with at least one element,
   * so need to manually add first one and can spread the rest
   */
  productList[0].id,
  ...productList.slice(1).map((product) => product.id),
];

export { productList, productIdsList };
