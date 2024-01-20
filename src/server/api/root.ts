import { createTRPCRouter } from "@server/api/trpc";
import { userRouter } from "./routers/user";
import { checkoutRouter } from "./routers/checkout";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  checkout: checkoutRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
