import { publicProcedure, router } from '../trpc';
import { todoRouter } from "./todo.router";


export const appRouter = router({
  healthcheck: publicProcedure.query(() => 'yay!'),
  todo: todoRouter,
});

export type AppRouter = typeof appRouter;
