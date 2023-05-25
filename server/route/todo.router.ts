import { createTodoSchema, updateTodoSchema, deleteTodoSchema } from "@/schema/todo.schema";
import { router, publicProcedure } from "../trpc";
import { z } from "zod";
import { prisma } from "@/server/prisma";

export const todoRouter = router({
  create: publicProcedure
    .input(createTodoSchema).mutation(async ({ input }) => {
      const { title, description } = input

      const result = await prisma.todo.create({
        data: {
          title: title,
          description: description,
        },
      });
      return {
        status: 201,
        message: "Todo created successfully",
        result: result,
      };
    }),
  update: publicProcedure
    .input(updateTodoSchema).mutation(async ({ input }) => {
      const { id, title, description } = input

      const result = await prisma.todo.update({
        where: { id },
        data: {
          title: title,
          description: description,
        },
      });
      return {
        status: 201,
        message: "Todo updated successfully",
        result: result,
      };
    }),
  delete: publicProcedure
    .input(deleteTodoSchema).mutation(async ({ input }) => {
      const { id } = input

      const result = await prisma.todo.delete({
        where: { id },
      });
      return {
        status: 201,
        message: "Todo updated successfully",
        result: result,
      };
    }),
  getAll: publicProcedure
    .query(async () => {
      return await prisma.todo.findMany()
    }),
  getById: publicProcedure
    .input(z.number())
    .query(async ({ input }) => {
      return await prisma.todo.findFirstOrThrow({
        where: { id: input }
      })
    })
});
