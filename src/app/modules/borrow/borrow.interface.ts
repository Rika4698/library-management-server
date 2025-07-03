import { Types } from "mongoose";




export interface LBorrow {
    book: Types.ObjectId;
    quantity: number;
    dueDate: Date;
}