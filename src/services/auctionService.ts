import { Auction, ItemToScan, RealmData, Item, RaidBotBonus } from "../types";
import { delay } from "../utils/delay";
import { formatPrice } from "../utils/formatPrice";
import * as chalk from "chalk";
import * as ItemsList from "../data/itemsList";
import { realmList } from "../data/realms";
import { fetchAuctionsData, fetchConnectedRealmId } from "./authService";
import { getItemDetails } from "../utils/helpers";
import {
  loadEquipableItemsData,
  loadRaidBotsData,
} from "../utils/loadJsonFiles";

export const getAuctions = async (token: string) => {
  const raidBotsData: { [key: number]: RaidBotBonus } =
    await loadRaidBotsData();
  const equipableItemsData: Item[] = await loadEquipableItemsData();

  let totalProcessedRealms = 0;
  let totalProcessedAuctions = 0;

  for (const realm of realmList) {
    try {
      const connectedRealmId = await fetchConnectedRealmId(token, realm.slug);
      if (connectedRealmId) {
        const auctionData = await fetchAuctionsData(token, connectedRealmId);
        if (auctionData && auctionData.auctions) {
          // Processing and logging auction data immediately
          scanAuctions(
            auctionData.auctions,
            realm,
            raidBotsData,
            equipableItemsData
          );

          totalProcessedRealms++;
          totalProcessedAuctions += auctionData.auctions.length;

          console.log(
            `Processed realm: ${realm.slug}, Auctions: ${auctionData.auctions.length}`
          );
        }
      }
      await delay(10); // Introducing delay to avoid rate limiting
    } catch (error) {
      console.error(`Error processing realm ${realm.slug}:`, error.message);
    }
  }

  console.log(`Total processed realms: ${totalProcessedRealms}`);
  console.log(`Total processed auctions: ${totalProcessedAuctions}`);

  return {
    processedRealms: totalProcessedRealms,
    processedAuctions: totalProcessedAuctions,
  };
};

export const getSingleRealmAuctions = async (
  token: string,
  realmSlug: string
) => {
  const raidBotsData: { [key: number]: RaidBotBonus } =
    await loadRaidBotsData();
  const equipableItemsData: Item[] = await loadEquipableItemsData();

  const connectedRealmId = await fetchConnectedRealmId(token, realmSlug);
  if (!connectedRealmId) {
    throw new Error(
      `Invalid realm slug or failed to fetch connected realm ID for ${realmSlug}`
    );
  }

  const auctionData = await fetchAuctionsData(token, connectedRealmId);
  if (!auctionData) {
    throw new Error(`Failed to fetch auction data for ${realmSlug}`);
  }

  const realm = realmList.find((r) => r.slug === realmSlug);
  if (realm) {
    scanAuctions(
      auctionData.auctions || [],
      realm,
      raidBotsData,
      equipableItemsData
    );
  }

  return auctionData;
};

const scanAuctions = (
  auctions: Auction[],
  realm: RealmData,
  raidBotsData: { [key: number]: RaidBotBonus },
  equipableItemsData: Item[]
) => {
  const filteredAuctions = auctions.filter((auction) => {
    const foundItem = ItemsList.itemsToScan.find((item) =>
      item.id
        ? item.id === auction.item.id
        : item.pet_species_id === auction.item.pet_species_id
    );

    // test new filter auction

    if (!foundItem || !auction.buyout) {
      return false;
    }

    if (foundItem.category === "BoE") {
      const itemDetails = getItemDetails(
        auction,
        raidBotsData,
        equipableItemsData,
        foundItem.category
      );

      // Check minimum item level
      if (
        foundItem.minItemLevel &&
        (!itemDetails.itemLevel ||
          itemDetails.itemLevel < foundItem.minItemLevel)
      ) {
        return false;
      }

      // Check maximum item level (if set)
      if (
        foundItem.maxItemLevel &&
        itemDetails.itemLevel > foundItem.maxItemLevel
      ) {
        return false;
      }

      // Check for socket presence
      if (foundItem.requireSocket && !itemDetails.hasSocket) {
        return false;
      }

      // Check for tertiary stats presence
      if (foundItem.requireTertiary && itemDetails.tertiaryStats.length === 0) {
        return false;
      }

      // Check price
      if (
        foundItem.targetPrice &&
        auction.buyout > foundItem.targetPrice * 10000
      ) {
        return false;
      }

      // All conditions met
      return true;
    } else {
      // Use existing logic for other categories
      return (
        foundItem &&
        auction.buyout &&
        (!foundItem.targetPrice ||
          auction.buyout <= foundItem.targetPrice * 10000)
      );
    }
  });

  if (filteredAuctions.length === 0) {
    return;
  }

  const connectedRealms = realm.connectedRealms
    ? ` (Connected Realms: ${realm.connectedRealms.join(", ")})`
    : "";
  console.log(
    chalk.yellow(
      `\nRealm: ${realm.name}${connectedRealms} | Language: ${realm.language || "undefined"}`
    )
  );

  const categories: { [key: string]: chalk.Chalk } = {
    "BoE": chalk.redBright,
    "Pet": chalk.cyan,
    "TCG Pet": chalk.blueBright,
    "Mount": chalk.cyanBright,
    "TCG Mount": chalk.bgBlueBright,
    "Transmo": chalk.blue,
    "Recipe": chalk.red,
  };

  const categorizedAuctions: {
    [key: string]: { auction: Auction; foundItem: ItemToScan }[];
  } = {
    "BoE": [],
    "Pet": [],
    "TCG Pet": [],
    "Mount": [],
    "TCG Mount": [],
    "Transmo": [],
    "Recipe": [],
  };

  filteredAuctions.forEach((auction) => {
    const foundItem = ItemsList.itemsToScan.find((item) =>
      item.id
        ? item.id === auction.item.id
        : item.pet_species_id === auction.item.pet_species_id
    );

    if (foundItem) {
      if (categorizedAuctions[foundItem.category]) {
        categorizedAuctions[foundItem.category].push({ auction, foundItem });
      } else {
        console.error(
          `Category ${foundItem.category} is not defined in categorizedAuctions.`
        );
      }
    }
  });

  for (const [category, items] of Object.entries(categorizedAuctions)) {
    if (items.length === 0) continue;

    console.log(categories[category](`\nCategory: ${category}`));
    items.forEach(({ auction, foundItem }) => {
      let itemDetails;

      if (category === "BoE" || category === "Transmo") {
        itemDetails = getItemDetails(
          auction,
          raidBotsData,
          equipableItemsData,
          category
        );
      }

      const formattedPrice = auction.buyout
        ? formatPrice(auction.buyout)
        : "N/A";
      const formattedTargetPrice = foundItem.targetPrice
        ? formatPrice(foundItem.targetPrice * 10000)
        : "N/A";
      const priceMessage = foundItem.targetPrice
        ? ` | Target Price: ${formattedTargetPrice}`
        : "";

      let socketMessage = "";
      let itemLevelMessage = "";
      let tertiaryMessage = "";

      if (itemDetails) {
        if (itemDetails.hasSocket) {
          socketMessage = chalk.blue(" | Socket: Yes");
        }

        itemLevelMessage = chalk.green(
          ` | Item Level: ${itemDetails.itemLevel}`
        );

        if (itemDetails.tertiaryStats.length) {
          tertiaryMessage = chalk.magenta(
            ` | Tertiary: ${itemDetails.tertiaryStats.join(", ")}`
          );
        }
      } else if (category === "Transmo" && !auction.item.bonus_lists) {
        // If itemDetails is undefined and no bonus_lists, use base item level
        const baseItem = equipableItemsData.find(
          (item) => item.id === auction.item.id
        );
        if (baseItem) {
          itemLevelMessage = chalk.green(
            ` | Item Level: ${baseItem.itemLevel}`
          );
        }
      }

      console.log(
        categories[category](`  Item: ${foundItem.name}`) +
          chalk.greenBright(` | Buyout: ${formattedPrice}`) +
          chalk.white(priceMessage) +
          itemLevelMessage +
          socketMessage +
          tertiaryMessage
      );
    });
  }
};
