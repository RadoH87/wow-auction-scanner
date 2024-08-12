import * as express from "express";
import * as dotenv from "dotenv";
import { getAuctionData } from "./controllers/auctionController";
import { getAuctionsByRealm } from "./controllers/realmController";
import {
  loadRaidBotsData,
  loadEquipableItemsData,
} from "./utils/loadJsonFiles";
import { generateItems } from "./controllers/itemController";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json()); // Middleware do parsowania JSON

(async () => {
  // Load necessary data before starting the server
  await loadRaidBotsData();
  await loadEquipableItemsData();

  app.get("/api/auctions", getAuctionData);
  app.get("/api/auctions/:realmSlug", getAuctionsByRealm);

  // Endpoint for generate items list
  app.post("/api/generate-items", generateItems);

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})();
