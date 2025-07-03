import { NextFunction, Request, Response } from "express";
import * as borrowService from './borrow.service';
import catchAsync from "../../../utils/catchAsync";



//create borrow
export const createBorrow = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const row = req.body;
        const borrow = await borrowService.createBorrow(row);
        return res.status(201).json({
            success: true,
            message: "Book borrowed successfully",
            data: borrow,
        });
    } catch (error) {
        next(error);
    }
});

// Borrow summary
export const getBorrowSummary = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const summery = await borrowService.getBorrowSummary();
        return res.status(201).json({
            success: true,
            message: "Borrowed books summary retrieved successfully",
            data: summery,
        });
    } catch (error) {
        next(error);
    }
});