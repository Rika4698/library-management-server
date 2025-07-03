import { NextFunction, Request, Response } from "express";
import * as serviceBook from './book.service';
import catchAsync from "../../../utils/catchAsync";




//create Book
export const createBook = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const book = await serviceBook.createBook(req.body);
        return res.status(201).json({
            success: true,
            message: "Book created successfully",
            data: book,
        });
    } catch (error) {


        next(error);

    }
});

//get all book
export const getBooks = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const book = await serviceBook.getBooks(req.query);
        return res.status(201).json({
            success: true,
            message: 'Books retrieved successfully',
            data: book,
        });
    } catch (err) {
        next(err);
    }
});

//get book by id
export const getBookById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.bookId;
        const book = await serviceBook.getBookById(id);
        if (book) {
            return res.status(201).json({
                success: true,
                message: 'Books retrieved successfully',
                data: book,
            });
        } else {
            return res.status(404).json({
                success: false,
                message: "Book not found",
                data: null,
            });
        }
    } catch (error) {
        next(error);
    }
});

//Update book

export const updateBookById = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.bookId;
        const updated = req.body;
        const book = await serviceBook.updateBookById(id, updated);
        if (book) {
            return res.status(201).json({
                success: true,
                message: 'Book updated successfully',
                data: book,
            });
        } else {
            return res.status(404).json({
                success: false,
                message: "Book not found",
                data: null,
            });
        }

    } catch (error) {
        next(error);

    }
});


//delete book
export const deleteBook = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.bookId
        const result = await serviceBook.deleteBook(id);
        if (result) {
            return res.status(201).json({
                success: true,
                message: 'Book deleted successfully',
                data: null,
            });
        } else {
            return res.status(404).json({
                success: false,
                message: "Book not found",
                data: null,
            });
        }
    } catch (error) {
        next(error);
    }
});