import { model, Schema } from 'mongoose';
import { LBook } from './book.interface';



const bookSchema = new Schema<LBook>({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        enum: ['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY'],
        required: true
    },
    isbn: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,

    },
    copies: {
        type: Number,
        required: true,
        min: 0
    },
    available: {
        type: Boolean,
        default: true,
    },
    
    

},
    {
        timestamps: true,
    }


);

bookSchema.pre('save', function (next) {
    this.available = this.copies > 0;
    next();
});

export const BookModel = model<LBook>('Book', bookSchema);