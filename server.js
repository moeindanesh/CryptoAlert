const express = require("express");
const tradingView_alert = require("./alertRoutes/tradingView");

const app = express();
app.use(express.json());

// Alert Routes
app.use(tradingView_alert);

app.get("/", async (req, res) => {
  res.send("ok");
});

app.listen(3000, () => {
  console.log("running on port 3000");
});
