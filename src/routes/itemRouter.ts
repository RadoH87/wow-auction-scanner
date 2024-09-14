import { Router } from "express";
import { generateItems } from "../controllers/itemController";

export const itemRouter = Router();

itemRouter.post("/generate-items", generateItems);
