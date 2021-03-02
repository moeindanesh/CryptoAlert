const express = require("express");

const router = express.Router();

router.post("/tradingview/alert", async (req, res) => {
  console.log({ req });
  let body = req.body;
  let { exchange, ticker, price, type } = body;
  console.log({ exchange, ticker, price, type });
  return true;
});

module.exports = router;

//tradingview pattern
//{"exchange": "{{exchange}}","ticker":"{{ticker}}","price":48000,"type":"cross"}
