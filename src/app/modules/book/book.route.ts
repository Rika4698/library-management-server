import { Router } from "express";
import * as CBook from './book.controller';
import validateRequest from "../../../validation/validateRequest";
import { createBookZodSchema, updateBookZodSchema } from "./book.validation";


const bookRouter = Router();

bookRouter.post("/", validateRequest(createBookZodSchema), CBook.createBook);
bookRouter.get('/', CBook.getBooks);
bookRouter.get('/:bookId', CBook.getBookById);
bookRouter.put('/:bookId', validateRequest(updateBookZodSchema), CBook.updateBookById);
bookRouter.delete('/:bookId', CBook.deleteBook);




export const bookRoutes = bookRouter;