import * as express from "express";

const app = express();

const PORT = 3001;

app.get("/api", (req, res) => {
  res.send("Main page");
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}/api`)
);
