import * as express from "express";
import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

console.log("Client ID:", process.env.CLIENT_ID); // Add logs for debugging

const app = express();
const PORT = process.env.PORT || 3001;

// Data types for API responses
interface AccessTokenResponse {
  access_token?: string;
}

// Function to obtain access token
const fetchAccessToken = async (): Promise<string | null> => {
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    console.error(
      "Missing CLIENT_ID or CLIENT_SECRET in environment variables"
    );
    return null;
  }

  const authUrl = "https://us.battle.net/oauth/token";
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

// Route to test connection
app.get("/api/test-connection", async (req, res) => {
  const token = await fetchAccessToken();
  if (!token) {
    return res.status(500).send("Failed to fetch access token");
  }
  res.send("Page working");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
