/**
 * Interface representing an item in an auction.
 */
export interface AuctionItem {
  id: number;
  context?: number;
  bonus_lists?: number[];
  modifiers?: {
    type: number;
    value: number;
  }[];
  pet_breed_id?: number;
  pet_level?: number;
  pet_quality_id?: number;
  pet_species_id?: number;
}

/**
 * Interface representing an auction entry.
 */
export interface Auction {
  id: number;
  item: AuctionItem;
  buyout?: number;
  bid?: number;
  quantity: number;
  time_left: string;
}

/**
 * Interface representing auction data, which contains an array of auctions.
 */
export interface AuctionData {
  auctions?: Auction[];
}

/**
 * Interface representing an item to scan in auctions.
 * This can represent both regular items and pets.
 */
export interface ItemToScan {
  id?: number;
  pet_species_id?: number;
  name: string;
  category: string;
  targetPrice?: number;
}

/**
 * Interface representing a Raid Bot Bonus for an item.
 */
export interface RaidBotBonus {
  id: number;
  level?: number;
  item_conversion?: number;
  rawStats?: { [key: string]: number };
}
/**
 * Interface representing an item with detailed information.
 */
export interface Item {
  id: number;
  name: string;
  icon?: string;
  itemLevel: number;
}
