import * as fs from "fs/promises";
import * as path from "path";
import { Item, RaidBotBonus } from "../types";

// Cache type definition for loaded data
type CacheType = {
  raidBotsData: { [key: number]: RaidBotBonus } | null;
  equipableItemsData: Item[] | null;
};

// Cache to store loaded data
const cache: CacheType = {
  raidBotsData: null,
  equipableItemsData: null,
};

// Generic function to load and cache data from a JSON file
const loadData = async <K extends keyof CacheType>(
  fileName: string,
  cacheKey: K
): Promise<NonNullable<CacheType[K]>> => {
  if (!cache[cacheKey]) {
    try {
      const filePath = path.join(__dirname, "../data", fileName);
      const data = await fs.readFile(filePath, "utf8");
      cache[cacheKey] = JSON.parse(data) as NonNullable<CacheType[K]>;
    } catch (error) {
      console.error(`Failed to load ${fileName}:`, error);
      throw error; // Re-throw the error for the caller to handle
    }
  }
  return cache[cacheKey] as NonNullable<CacheType[K]>;
};

// Function to load raid bots data with caching
export const loadRaidBotsData = (): Promise<{ [key: number]: RaidBotBonus }> =>
  loadData("raid_bots.json", "raidBotsData");

// Function to load equipable items data with caching
export const loadEquipableItemsData = (): Promise<Item[]> =>
  loadData("items.json", "equipableItemsData");
