import { z } from "zod"

export const createTodoSchema = z.object({
    title: z.string(),
    description: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional()
})

export const updateTodoSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
})

export const deleteTodoSchema = z.object({
    id: z.number(),
})

export type createTodoSchema = z.TypeOf<typeof createTodoSchema>
export type updateTodoSchema = z.TypeOf<typeof updateTodoSchema>
export type deleteTodoSchema = z.TypeOf<typeof deleteTodoSchema>