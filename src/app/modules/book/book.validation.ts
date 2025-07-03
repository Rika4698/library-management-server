import { z } from "zod";



export const createBookZodSchema = z.object({
    body: z.object({
        title: z.string(),
        author: z.string(),
        genre: z.enum(['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY']),
        isbn: z.string(),
        description: z.string().optional(),
        copies: z.number().min(0),
        available: z.boolean().optional(),
        photoUrl: z.string().url(),
    }),
});

export const updateBookZodSchema = z.object({
    body: z.object({
        title: z.string().optional(),
        author: z.string().optional(),
        genre: z.enum(['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY']).optional(),
        isbn: z.string().optional(),
        description: z.string().optional(),
        copies: z.number().min(0).optional(),
        available: z.boolean().optional(),
        photoUrl: z.string().url(),
    }),
});