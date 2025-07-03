import { model, Schema } from "mongoose";
import { LBorrow } from "./borrow.interface";





const borrowSchema = new Schema<LBorrow>(
    {
        book: {
            type: Schema.Types.ObjectId,
            ref: 'Book',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 1
        },
        dueDate: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

export const BorrowModel = model<LBorrow>('Borrow', borrowSchema);