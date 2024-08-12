import { Request, Response } from "express";
import { getAuctions } from "../services/auctionService";
import { fetchAccessToken } from "../services/authService";

export const getAuctionData = async (req: Request, res: Response) => {
  const token = await fetchAccessToken();
  if (!token) {
    return res.status(500).send("Failed to fetch access token");
  }

  try {
    const auctionStats = await getAuctions(token);

    // Logging auction statistics for debugging purposes
    console.log("Auction Stats:", JSON.stringify(auctionStats, null, 2));

    // Returning statistics as a response
    res.json({
      message: "Auction data processed successfully",
      stats: auctionStats,
    });
  } catch (error) {
    // Error handling
    console.error("Error processing auction data:", error);
    res.status(500).send("Failed to process auction data");
  }
};
