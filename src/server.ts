import * as express from "express";

console.log("Client ID:", process.env.CLIENT_ID); // Add logs for debugging

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Main page working");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
