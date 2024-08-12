import { Request, Response } from "express";
import { generateItemList } from "../services/itemService";

// Controller function to handle item generation requests
export const generateItems = async (req: Request, res: Response) => {
  try {
    // Extract 'ids' from the request body
    const { ids } = req.body;
    // Validate that 'ids' is an array
    if (!ids || !Array.isArray(ids)) {
      return res.status(400).json({
        error: "Invalid request body, 'ids' should be an array of numbers",
      });
    }
    // Generate the item list based on the provided IDs
    const itemList = await generateItemList(ids);
    // Send the generated list as a response
    res.json(itemList);
  } catch (error) {
    // Error handling
    console.error("Error generating item list:", error);
    res.status(500).json({ error: "Failed to generate item list" });
  }
};
