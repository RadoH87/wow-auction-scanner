import { Item, RaidBotBonus, Auction } from "../types";

// Gets the base item level from equipable items data
const getBaseItemLevel = (
  itemId: number,
  equipableItemsData: Item[]
): number => {
  const item = equipableItemsData.find((item) => item.id === itemId);
  return item ? item.itemLevel : 0;
};

// Retrieves the item name from equipable items data
const getItemName = (itemId: number, equipableItemsData: Item[]): string => {
  const item = equipableItemsData.find((item) => item.id === itemId);
  return item ? item.name : "Unknown Item";
};

// Calculates the item level increase based on bonus list ID
const getIlvlIncrease = (
  bonusListId: number,
  raidBotsData: { [key: number]: RaidBotBonus }
): number => {
  const bonus = raidBotsData[bonusListId];
  return bonus && bonus.level ? bonus.level : 0;
};

// Checks if the item has a socket based on bonus list
const checkSocket = (bonusList: number[] = []): boolean => {
  const socketIDs = [10531, 10589, 10591, 10596, 10597, 10601, 7935];
  return (
    Array.isArray(bonusList) && bonusList.some((id) => socketIDs.includes(id))
  );
};

// Retrieves tertiary stats from bonus list
const getTertiaryStats = (bonusList: number[] = []): string[] => {
  const stats: string[] = [];
  if (Array.isArray(bonusList)) {
    if (bonusList.includes(43)) stats.push("Indestructible");
    if (bonusList.includes(41)) stats.push("Leech");
    if (bonusList.includes(42)) stats.push("Speed");
    if (bonusList.includes(40)) stats.push("Avoidance");
  }
  return stats;
};

// Combines all item details into a single object, optionally handling specific categories
export const getItemDetails = (
  auction: Auction,
  raidBotsData: { [key: number]: RaidBotBonus },
  equipableItemsData: Item[],
  category: string // Category to determine specific handling logic
) => {
  const { item } = auction;
  const baseIlvl = getBaseItemLevel(item.id, equipableItemsData);

  // Initialize item level with base item level
  let itemLevel = baseIlvl;

  if (category === "BoE" || category === "Transmo") {
    // Increase item level based on bonus lists if available
    if (item.bonus_lists && item.bonus_lists.length > 0) {
      const ilvlIncrease = item.bonus_lists.reduce(
        (acc, id) => acc + getIlvlIncrease(id, raidBotsData),
        0
      );
      itemLevel += ilvlIncrease;
    }

    // If item level is 0, it is not worth displaying
    if (itemLevel === 0) {
      itemLevel = null;
    }
  } else {
    itemLevel = null; // Do not display item level for other categories
  }

  const name = getItemName(item.id, equipableItemsData);
  const hasSocket = checkSocket(item.bonus_lists);
  const tertiaryStats = getTertiaryStats(item.bonus_lists);

  return {
    name,
    itemLevel,
    hasSocket,
    tertiaryStats,
    buyout: auction.buyout,
    bid: auction.bid,
  };
};
