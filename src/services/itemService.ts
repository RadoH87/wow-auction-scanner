import * as fs from "fs/promises";
import { Item } from "../types";

// Cache to store the loaded items
let itemsCache: Item[] | null = null;

// Function to load items from the JSON file
const loadItems = async (): Promise<Item[]> => {
  if (!itemsCache) {
    // Check if cache is empty
    try {
      // Read the file asynchronously and parse JSON data
      const data = await fs.readFile("src/data/items.json", "utf8");
      itemsCache = JSON.parse(data) as Item[];
      console.log("Items loaded and cached."); // Log when items are successfully loaded and cached
    } catch (error) {
      console.error("Failed to load items:", error);
      throw new Error("Unable to load items"); // Throw an error if file loading fails
    }
  }
  return itemsCache; // Return cached items if available
};

// Function to generate the item list based on given IDs
export const generateItemList = async (ids: number[]) => {
  const items = await loadItems(); // Ensure items are loaded
  return items
    .filter((item) => ids.includes(item.id)) // Filter items by the provided IDs
    .map((item) => ({
      id: item.id,
      name: item.name,
      category: "BoE", // Set the category to "BoE"
      targetPrice: Math.floor(Math.random() * 1000000), // Assign a random target price
    }));
};
