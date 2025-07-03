import express, { Request, Response } from "express"
import cors from "cors"
import { bookRoutes } from "./app/modules/book/book.route";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import { borrowRoutes } from "./app/modules/borrow/borrow.route";



const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/books', bookRoutes);
app.use('/api/borrow', borrowRoutes);

app.get('/', (req: Request, res: Response) => {
    res.status(200).send({
        status: true,
        message: 'Server running successfully',
    });
});


app.use(globalErrorHandler);

export default app;