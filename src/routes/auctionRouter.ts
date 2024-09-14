import { Router } from "express";
import { getAuctionData } from "../controllers/auctionController";
import { getAuctionsByRealm } from "../controllers/realmController";

export const auctionRouter = Router();

auctionRouter.get("/", getAuctionData).get("/:realmSlug", getAuctionsByRealm);
