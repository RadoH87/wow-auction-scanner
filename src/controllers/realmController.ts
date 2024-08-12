import { Request, Response } from "express";
import { fetchAccessToken } from "../services/authService";
import { getSingleRealmAuctions } from "../services/auctionService";

// Controller function to handle requests for auction data by realm
export const getAuctionsByRealm = async (req: Request, res: Response) => {
  const { realmSlug } = req.params;

  const token = await fetchAccessToken();
  if (!token) {
    return res.status(500).send("Failed to fetch access token");
  }

  try {
    // Fetch auction data for a specific realm
    const auctionData = await getSingleRealmAuctions(token, realmSlug);
    if (!auctionData) {
      return res.status(500).send("Failed to fetch auction data");
    }
    res.json(auctionData);
  } catch (error) {
    // Error handling
    console.error(
      `Error fetching auctions for realm ${realmSlug}:`,
      error.message
    );
    res.status(500).send(`Error fetching auctions for realm ${realmSlug}`);
  }
};
