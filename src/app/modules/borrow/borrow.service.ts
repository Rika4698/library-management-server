import { BookModel } from "../book/book.model";
import { LBorrow } from "./borrow.interface";
import { BorrowModel } from "./borrow.model";




// create borrow book
export const createBorrow = async (payload: LBorrow) => {
    const bookId = await BookModel.findById(payload.book);
    if (!bookId)
        throw new Error('Book not found');

      //check enough copies
    if (bookId.copies < payload.quantity)
        throw new Error('Not enough copies available');

    //Duduct copies 
    bookId.copies -= payload.quantity;

    await bookId.save();
    
    //Save borrow record
    const borrow = await BorrowModel.create(payload);

    return borrow;
};

// get borrow book (Using Aggregation)
export const getBorrowSummary = async () => {
    const result = await BorrowModel.aggregate([
        {
            $group: {
                _id: '$book',
                totalQuantity: { $sum: '$quantity' },
            },
        },
        {
            $lookup: {
                from: 'books',
                localField: '_id',
                foreignField: '_id',
                as: "bookDetails",
            },
        },
        {
            $unwind: '$bookDetails',
        },
        {
            $project: {
                _id: 0,
                book: {
                    title: '$bookDetails.title',
                    isbn: '$bookDetails.isbn',
                },

                totalQuantity: 1,
            },
        },
    ]);
    return result;
};