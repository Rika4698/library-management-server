import { Router } from "express";
import validateRequest from "../../../validation/validateRequest";
import { createBorrowZodSchema } from "./borrow.validation";
import * as CBorrow from './borrow.controller';



const router = Router();

router.post('/', validateRequest(createBorrowZodSchema), CBorrow.createBorrow);
router.get('/', CBorrow.getBorrowSummary);

export const borrowRoutes = router;