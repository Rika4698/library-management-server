/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";



const validateRequest = (schema: ZodSchema<any>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse({ body: req.body });
            next();

        } catch (error) {
            next(error);

        }
    };
};

export default validateRequest;