// import * as express from "express";
// import * as dotenv from "dotenv";

// // Ładowanie zmiennych środowiskowych z pliku .env
// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Typy danych dla odpowiedzi z API
// interface AccessTokenResponse {
//   access_token?: string;
// }

// interface AuctionData {
//   auctions?: any[];
// }

// interface Realm {
//   id: number;
//   slug: string;
//   name: {
//     en_GB: string;
//   };
// }

// interface RealmListResponse {
//   realms?: Realm[];
// }

// // Funkcja do uzyskiwania tokena dostępu
// const fetchAccessToken = async (): Promise<string | null> => {
//   const clientId = process.env.CLIENT_ID;
//   const clientSecret = process.env.CLIENT_SECRET;

//   if (!clientId || !clientSecret) {
//     console.error(
//       "Missing CLIENT_ID or CLIENT_SECRET in environment variables"
//     );
//     return null;
//   }

//   const authUrl = "https://eu.battle.net/oauth/token";
//   const authParams = new URLSearchParams();
//   authParams.append("grant_type", "client_credentials");

//   try {
//     const response = await fetch(authUrl, {
//       method: "POST",
//       headers: {
//         "Authorization": `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: authParams,
//     });

//     const data: AccessTokenResponse = await response.json();
//     return data.access_token || null;
//   } catch (error) {
//     console.error("Error fetching access token:", error);
//     return null;
//   }
// };

// // Funkcja do pobierania listy realmów
// const fetchRealms = async (
//   accessToken: string
// ): Promise<RealmListResponse | null> => {
//   const region = "eu";
//   const namespace = `dynamic-${region}`;
//   const baseUrl = `${region}.api.blizzard.com`;

//   try {
//     const response = await fetch(`https://${baseUrl}/data/wow/realm/index`, {
//       headers: {
//         "Authorization": `Bearer ${accessToken}`,
//         "Battlenet-Namespace": namespace,
//       },
//     });

//     const data: RealmListResponse = await response.json();

//     // Dodajemy logi, aby zobaczyć, co jest zwracane przez API
//     console.log("Realms data:", JSON.stringify(data, null, 2));

//     return data;
//   } catch (error) {
//     console.error("Error fetching realm data:", error);
//     return null;
//   }
// };

// // Funkcja do pobierania danych aukcji
// const fetchAuctions = async (
//   accessToken: string,
//   connectedRealmId: number
// ): Promise<AuctionData | null> => {
//   const region = "eu";
//   const namespace = `dynamic-${region}`;
//   const baseUrl = `${region}.api.blizzard.com`;

//   try {
//     const response = await fetch(
//       `https://${baseUrl}/data/wow/connected-realm/${connectedRealmId}/auctions`,
//       {
//         headers: {
//           "Authorization": `Bearer ${accessToken}`,
//           "Battlenet-Namespace": namespace,
//         },
//       }
//     );

//     const data: AuctionData = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching auctions:", error);
//     return null;
//   }
// };

// // Trasa do pobierania listy realmów
// app.get("/api/realms", async (req, res) => {
//   const token = await fetchAccessToken();
//   if (!token) {
//     return res.status(500).send("Failed to fetch access token");
//   }

//   const realmData = await fetchRealms(token);
//   if (!realmData) {
//     return res.status(500).send("Failed to fetch realm data");
//   }

//   // Filtrowanie tylko potrzebnych pól
//   const filteredRealms = realmData.realms?.map((realm) => ({
//     id: realm.id,
//     slug: realm.slug,
//     name: realm.name.en_GB,
//   }));

//   res.json({
//     count: filteredRealms?.length,
//     realms: filteredRealms,
//   });
// });

// // Trasa do pobierania danych aukcji
// app.get("/api/auctions/:realmSlug", async (req, res) => {
//   const realmSlug = req.params.realmSlug;

//   const token = await fetchAccessToken();
//   if (!token) {
//     return res.status(500).send("Failed to fetch access token");
//   }

//   const realmData = await fetchRealms(token);
//   if (!realmData) {
//     return res.status(500).send("Failed to fetch realm data");
//   }

//   // Znajdź realm na podstawie slug
//   const realm = realmData.realms?.find(
//     (r) => r.slug.toLowerCase() === realmSlug.toLowerCase()
//   );

//   if (!realm) {
//     return res.status(400).send("Invalid realm slug");
//   }

//   const auctionData = await fetchAuctions(token, realm.id);
//   if (!auctionData) {
//     return res.status(500).send("Failed to fetch auction data");
//   }

//   res.json(auctionData);
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// import * as express from "express";
// import * as dotenv from "dotenv";

// // Ładowanie zmiennych środowiskowych z pliku .env
// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Typy danych dla odpowiedzi z API
// interface AccessTokenResponse {
//   access_token?: string;
// }

// interface AuctionData {
//   auctions?: any[];
// }

// interface Realm {
//   id: number;
//   slug: string;
//   name: {
//     en_GB: string;
//   };
// }

// interface RealmListResponse {
//   realms?: Realm[];
// }

// // Funkcja do uzyskiwania tokena dostępu
// const fetchAccessToken = async (): Promise<string | null> => {
//   const clientId = process.env.CLIENT_ID;
//   const clientSecret = process.env.CLIENT_SECRET;

//   if (!clientId || !clientSecret) {
//     console.error(
//       "Missing CLIENT_ID or CLIENT_SECRET in environment variables"
//     );
//     return null;
//   }

//   const region = "eu";
//   const authUrl = `https://${region}.battle.net/oauth/token`;
//   const authParams = new URLSearchParams();
//   authParams.append("grant_type", "client_credentials");

//   try {
//     const response = await fetch(authUrl, {
//       method: "POST",
//       headers: {
//         "Authorization": `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: authParams,
//     });

//     const data: AccessTokenResponse = await response.json();
//     return data.access_token || null;
//   } catch (error) {
//     console.error("Error fetching access token:", error);
//     return null;
//   }
// };

// // Funkcja do pobierania listy realmów
// const fetchRealms = async (
//   accessToken: string
// ): Promise<RealmListResponse | null> => {
//   const region = "eu";
//   const namespace = `dynamic-${region}`;
//   const baseUrl = `${region}.api.blizzard.com`;

//   try {
//     const response = await fetch(`https://${baseUrl}/data/wow/realm/index`, {
//       headers: {
//         "Authorization": `Bearer ${accessToken}`,
//         "Battlenet-Namespace": namespace,
//       },
//     });

//     const data: RealmListResponse = await response.json();

//     return data;
//   } catch (error) {
//     console.error("Error fetching realm data:", error);
//     return null;
//   }
// };

// // Funkcja do pobierania danych aukcji
// const fetchAuctions = async (
//   accessToken: string,
//   connectedRealmId: number
// ): Promise<AuctionData | null> => {
//   const region = "eu";
//   const namespace = `dynamic-${region}`;
//   const baseUrl = `${region}.api.blizzard.com`;

//   try {
//     const response = await fetch(
//       `https://${baseUrl}/data/wow/connected-realm/${connectedRealmId}/auctions`,
//       {
//         headers: {
//           "Authorization": `Bearer ${accessToken}`,
//           "Battlenet-Namespace": namespace,
//         },
//       }
//     );

//     const data: AuctionData = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching auctions:", error);
//     return null;
//   }
// };

// // Trasa do pobierania listy realmów
// app.get("/api/realms", async (req, res) => {
//   const token = await fetchAccessToken();
//   if (!token) {
//     return res.status(500).send("Failed to fetch access token");
//   }

//   const realmData = await fetchRealms(token);
//   if (!realmData) {
//     return res.status(500).send("Failed to fetch realm data");
//   }

//   // Filtrowanie tylko potrzebnych pól
//   const filteredRealms = realmData.realms?.map((realm) => ({
//     id: realm.id,
//     slug: realm.slug,
//     name: realm.name.en_GB,
//   }));

//   res.json({
//     count: filteredRealms?.length,
//     realms: filteredRealms,
//   });
// });

// // Trasa do pobierania danych aukcji
// app.get("/api/auctions/:realmSlug", async (req, res) => {
//   const realmSlug = req.params.realmSlug;

//   const token = await fetchAccessToken();
//   if (!token) {
//     return res.status(500).send("Failed to fetch access token");
//   }

//   const realmData = await fetchRealms(token);
//   if (!realmData) {
//     return res.status(500).send("Failed to fetch realm data");
//   }

//   // Znajdź realm na podstawie slug
//   const realm = realmData.realms?.find(
//     (r) => r.slug.toLowerCase() === realmSlug.toLowerCase()
//   );

//   if (!realm) {
//     return res.status(400).send("Invalid realm slug");
//   }

//   const auctionData = await fetchAuctions(token, realm.id);
//   if (!auctionData) {
//     return res.status(500).send("Failed to fetch auction data");
//   }

//   res.json(auctionData);
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// import * as express from "express";
// import * as dotenv from "dotenv";

// // Ładowanie zmiennych środowiskowych z pliku .env
// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3001;

// export const itemsToScan = [
//   { id: 208432, name: "Vengeful Bladebeak Girdle" },
//   // Dodaj tutaj więcej przedmiotów według potrzeby
// ];

// // Typy danych dla odpowiedzi z API
// interface AccessTokenResponse {
//   access_token?: string;
// }

// interface AuctionData {
//   auctions?: Auction[];
// }

// interface Auction {
//   id: number;
//   item: {
//     id: number;
//     context?: number;
//     bonus_lists?: number[];
//     modifiers?: {
//       type: number;
//       value: number;
//     }[];
//     pet_breed_id?: number;
//     pet_level?: number;
//     pet_quality_id?: number;
//     pet_species_id?: number;
//   };
//   buyout?: number; // Pole opcjonalne, bo nie wszystkie przedmioty muszą je mieć
//   quantity: number;
//   time_left: string;
// }

// interface Realm {
//   id: number;
//   slug: string;
//   name: {
//     en_GB: string;
//   };
// }

// interface RealmListResponse {
//   realms?: Realm[];
// }

// interface ConnectedRealmResponse {
//   connected_realm?: {
//     href: string;
//   };
// }

// // Funkcja do uzyskiwania tokena dostępu
// const fetchAccessToken = async (): Promise<string | null> => {
//   const clientId = process.env.CLIENT_ID;
//   const clientSecret = process.env.CLIENT_SECRET;

//   if (!clientId || !clientSecret) {
//     console.error(
//       "Missing CLIENT_ID or CLIENT_SECRET in environment variables"
//     );
//     return null;
//   }

//   const region = "eu";
//   const authUrl = `https://${region}.battle.net/oauth/token`;
//   const authParams = new URLSearchParams();
//   authParams.append("grant_type", "client_credentials");

//   try {
//     const response = await fetch(authUrl, {
//       method: "POST",
//       headers: {
//         "Authorization": `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: authParams,
//     });

//     const data: AccessTokenResponse = await response.json();
//     return data.access_token || null;
//   } catch (error) {
//     console.error("Error fetching access token:", error);
//     return null;
//   }
// };

// // Funkcja do pobierania listy realmów
// const fetchRealms = async (
//   accessToken: string
// ): Promise<RealmListResponse | null> => {
//   const region = "eu";
//   const namespace = `dynamic-${region}`;
//   const baseUrl = `${region}.api.blizzard.com`;

//   try {
//     const response = await fetch(`https://${baseUrl}/data/wow/realm/index`, {
//       headers: {
//         "Authorization": `Bearer ${accessToken}`,
//         "Battlenet-Namespace": namespace,
//       },
//     });

//     const data: RealmListResponse = await response.json();

//     return data;
//   } catch (error) {
//     console.error("Error fetching realm data:", error);
//     return null;
//   }
// };

// // Funkcja do pobierania connected realm ID
// const fetchConnectedRealmId = async (
//   accessToken: string,
//   realmSlug: string
// ): Promise<number | null> => {
//   const region = "eu";
//   const namespace = `dynamic-${region}`;
//   const baseUrl = `${region}.api.blizzard.com`;

//   try {
//     const response = await fetch(
//       `https://${baseUrl}/data/wow/realm/${realmSlug}`,
//       {
//         headers: {
//           "Authorization": `Bearer ${accessToken}`,
//           "Battlenet-Namespace": namespace,
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error(
//         `Error fetching connected realm ID for ${realmSlug}: ${response.statusText}`
//       );
//     }

//     const data: ConnectedRealmResponse = await response.json();
//     const connectedRealmUrl = new URL(data.connected_realm.href);
//     const connectedRealmId = parseInt(
//       connectedRealmUrl.pathname.split("/").pop() || "",
//       10
//     );
//     return connectedRealmId;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

// // Funkcja do pobierania danych aukcji
// const fetchAuctions = async (
//   accessToken: string,
//   connectedRealmId: number
// ): Promise<AuctionData | null> => {
//   const region = "eu";
//   const namespace = `dynamic-${region}`;
//   const baseUrl = `${region}.api.blizzard.com`;

//   try {
//     const response = await fetch(
//       `https://${baseUrl}/data/wow/connected-realm/${connectedRealmId}/auctions?namespace=${namespace}`,
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );

//     const data: AuctionData = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching auctions:", error);
//     return null;
//   }
// };

// // Funkcja skanująca aukcje
// const scanAuctions = (auctions: Auction[], realmSlug: string) => {
//   auctions.forEach((auction) => {
//     const foundItem = itemsToScan.find((item) => item.id === auction.item.id);
//     if (foundItem) {
//       console.log(
//         `Item: ${foundItem.name}, Buyout: ${auction.buyout}, Realm: ${realmSlug}`
//       );
//     }
//   });
// };

// // Trasa do pobierania listy realmów
// app.get("/api/realms", async (req, res) => {
//   const token = await fetchAccessToken();
//   if (!token) {
//     return res.status(500).send("Failed to fetch access token");
//   }

//   const realmData = await fetchRealms(token);
//   if (!realmData) {
//     return res.status(500).send("Failed to fetch realm data");
//   }

//   // Filtrowanie tylko potrzebnych pól
//   const filteredRealms = realmData.realms?.map((realm) => ({
//     id: realm.id,
//     slug: realm.slug,
//     name: realm.name.en_GB,
//   }));

//   res.json({
//     count: filteredRealms?.length,
//     realms: filteredRealms,
//   });
// });

// // Trasa do pobierania danych aukcji
// app.get("/api/auctions/:realmSlug", async (req, res) => {
//   const realmSlug = req.params.realmSlug;

//   const token = await fetchAccessToken();
//   if (!token) {
//     return res.status(500).send("Failed to fetch access token");
//   }

//   const connectedRealmId = await fetchConnectedRealmId(token, realmSlug);
//   if (!connectedRealmId) {
//     return res
//       .status(400)
//       .send("Invalid realm slug or failed to fetch connected realm ID");
//   }

//   const auctionData = await fetchAuctions(token, connectedRealmId);
//   if (!auctionData) {
//     return res.status(500).send("Failed to fetch auction data");
//   }

//   // Skanuj aukcje
//   scanAuctions(auctionData.auctions || [], realmSlug);

//   res.json(auctionData);
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// przyklad z sformatowana cena

import * as express from "express";
import * as dotenv from "dotenv";

// Ładowanie zmiennych środowiskowych z pliku .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const itemsToScan = [
  { id: 208432, name: "Vengeful Bladebeak Girdle" },
  // Dodaj tutaj więcej przedmiotów według potrzeby
];

// Typy danych dla odpowiedzi z API
interface AccessTokenResponse {
  access_token?: string;
}

interface AuctionData {
  auctions?: Auction[];
}

interface AuctionItem {
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

interface Auction {
  id: number;
  item: AuctionItem;
  buyout?: number; // Pole opcjonalne, bo nie wszystkie przedmioty muszą je mieć
  quantity: number;
  time_left: string;
}

interface Realm {
  id: number;
  slug: string;
  name: {
    en_GB: string;
  };
}

interface RealmListResponse {
  realms?: Realm[];
}

interface ConnectedRealmResponse {
  connected_realm?: {
    href: string;
  };
}

// Funkcja do uzyskiwania tokena dostępu
const fetchAccessToken = async (): Promise<string | null> => {
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    console.error(
      "Missing CLIENT_ID or CLIENT_SECRET in environment variables"
    );
    return null;
  }

  const region = "eu";
  const authUrl = `https://${region}.battle.net/oauth/token`;
  const authParams = new URLSearchParams();
  authParams.append("grant_type", "client_credentials");

  try {
    const response = await fetch(authUrl, {
      method: "POST",
      headers: {
        "Authorization": `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: authParams,
    });

    const data: AccessTokenResponse = await response.json();
    return data.access_token || null;
  } catch (error) {
    console.error("Error fetching access token:", error);
    return null;
  }
};

// Funkcja do pobierania listy realmów
const fetchRealms = async (
  accessToken: string
): Promise<RealmListResponse | null> => {
  const region = "eu";
  const namespace = `dynamic-${region}`;
  const baseUrl = `${region}.api.blizzard.com`;

  try {
    const response = await fetch(`https://${baseUrl}/data/wow/realm/index`, {
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Battlenet-Namespace": namespace,
      },
    });

    const data: RealmListResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching realm data:", error);
    return null;
  }
};

// Funkcja do pobierania connected realm ID
const fetchConnectedRealmId = async (
  accessToken: string,
  realmSlug: string
): Promise<number | null> => {
  const region = "eu";
  const namespace = `dynamic-${region}`;
  const baseUrl = `${region}.api.blizzard.com`;

  try {
    const response = await fetch(
      `https://${baseUrl}/data/wow/realm/${realmSlug}`,
      {
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Battlenet-Namespace": namespace,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Error fetching connected realm ID for ${realmSlug}: ${response.statusText}`
      );
    }

    const data: ConnectedRealmResponse = await response.json();
    const connectedRealmUrl = new URL(data.connected_realm.href);
    const connectedRealmId = parseInt(
      connectedRealmUrl.pathname.split("/").pop() || "",
      10
    );
    return connectedRealmId;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Funkcja do pobierania danych aukcji
const fetchAuctions = async (
  accessToken: string,
  connectedRealmId: number
): Promise<AuctionData | null> => {
  const region = "eu";
  const namespace = `dynamic-${region}`;
  const baseUrl = `${region}.api.blizzard.com`;

  try {
    const response = await fetch(
      `https://${baseUrl}/data/wow/connected-realm/${connectedRealmId}/auctions?namespace=${namespace}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const data: AuctionData = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching auctions:", error);
    return null;
  }
};

// Funkcja formatująca cenę
const formatPrice = (buyout: number): string => {
  return Math.floor(buyout / 10000).toLocaleString();
};

// Funkcja skanująca aukcje
const scanAuctions = (auctions: Auction[], realmSlug: string) => {
  auctions.forEach((auction) => {
    const foundItem = itemsToScan.find((item) => item.id === auction.item.id);
    if (foundItem) {
      const formattedPrice = auction.buyout
        ? formatPrice(auction.buyout)
        : "N/A";
      console.log(
        `Item: ${foundItem.name}, Buyout: ${formattedPrice}, Realm: ${realmSlug}`
      );
    }
  });
};

// Trasa do pobierania listy realmów
app.get("/api/realms", async (req, res) => {
  const token = await fetchAccessToken();
  if (!token) {
    return res.status(500).send("Failed to fetch access token");
  }

  const realmData = await fetchRealms(token);
  if (!realmData) {
    return res.status(500).send("Failed to fetch realm data");
  }

  // Filtrowanie tylko potrzebnych pól
  const filteredRealms = realmData.realms?.map((realm) => ({
    id: realm.id,
    slug: realm.slug,
    name: realm.name.en_GB,
  }));

  res.json({
    count: filteredRealms?.length,
    realms: filteredRealms,
  });
});

// Trasa do pobierania danych aukcji
app.get("/api/auctions/:realmSlug", async (req, res) => {
  const realmSlug = req.params.realmSlug;

  const token = await fetchAccessToken();
  if (!token) {
    return res.status(500).send("Failed to fetch access token");
  }

  const connectedRealmId = await fetchConnectedRealmId(token, realmSlug);
  if (!connectedRealmId) {
    return res
      .status(400)
      .send("Invalid realm slug or failed to fetch connected realm ID");
  }

  const auctionData = await fetchAuctions(token, connectedRealmId);
  if (!auctionData) {
    return res.status(500).send("Failed to fetch auction data");
  }

  // Skanuj aukcje
  scanAuctions(auctionData.auctions || [], realmSlug);

  res.json(auctionData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
