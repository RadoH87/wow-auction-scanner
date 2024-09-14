import * as express from "express";
import * as dotenv from "dotenv";
import {
  loadRaidBotsData,
  loadEquipableItemsData,
} from "./utils/loadJsonFiles";
import { auctionRouter } from "./routes/auctionRouter";
import { itemRouter } from "./routes/itemRouter";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Parse JSON Middleware
app.use(express.json());

(async () => {
  // Load necessary data before starting the server
  await loadRaidBotsData();
  await loadEquipableItemsData();

  app.use("/api/auctions", auctionRouter);
  app.use("/api", itemRouter);

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})();
