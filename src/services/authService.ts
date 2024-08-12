import {
  AccessTokenResponse,
  AuctionData,
  ConnectedRealmResponse,
} from "../types";

export const fetchAccessToken = async (): Promise<string | null> => {
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

export const fetchConnectedRealmId = async (
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
    const connectedRealmUrl = new URL(data.connected_realm?.href);
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

export const fetchAuctionsData = async (
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
