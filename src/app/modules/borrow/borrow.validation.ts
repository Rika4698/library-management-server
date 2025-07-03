import { z } from "zod";


export const createBorrowZodSchema = z.object({
    body: z.object({
        book: z.string().min(1, "Book ID is required"),
        quantity: z.number().min(1, 'Quantity must be at least 1'),
        dueDate: z.string().refine(
            (date) => !isNaN(Date.parse(date)),
            { message: "Invalid dueDate format" }
        ),

    }),
});