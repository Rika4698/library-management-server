import { IBookFilter, LBook } from "./book.interface";
import { BookModel } from "./book.model";



// Create Book API
export const createBook = async (payload: LBook) => {
    return await BookModel.create(payload);
};

// GET Book by filter, sort, limit
export const getBooks = async (filter: IBookFilter) => {
    // filter
    const query: Record<string, unknown> = {};
    if (filter.filter) {
        query.genre = filter.filter;
    }

    //sorting
    const sortQuery: Record<string, 1 | -1> = {};
    if (filter.sortBy && filter.sort) {
        sortQuery[filter.sortBy] = filter.sort === 'asc' ? 1 : -1;
    } else {
        sortQuery.createAt = -1;
    }

    //limit
    const limit = typeof filter.limit === 'string' ? parseInt(filter.limit): filter.limit || 10;

    return await BookModel.find(query).sort(sortQuery).limit(limit);
};


//GET Book by ID
export const getBookById = async (id: string) => {
    return await BookModel.findById(id);
};

//Update book
export const updateBookById = async (id: string, data: LBook) => {
    const updatedProduct = await BookModel.findByIdAndUpdate(
        id,
        data,
        { new: true },
    );
    if (updatedProduct) {
        return { product: updatedProduct, updated: true };
    } else {
        return { updated: false };
    }
};

//delete book
export const deleteBook = async (id: string) => {
    const result = await BookModel.findByIdAndDelete(id);
    return result;
}