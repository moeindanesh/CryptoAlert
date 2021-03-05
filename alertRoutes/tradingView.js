const express = require("express");
const { createMessage } = require("../utils/create-message");
const { groupSend } = require("../utils/send-sms");

const router = express.Router();

router.post("/tradingview/alert", async (req, res) => {
  console.log({ req });
  let body = req.body;
  let { exchange, ticker, price, type } = body;

  if (!ticker || !exchange || !price || !type) {
    res.send("faild");
    return;
  }

  // create message
  let message = createMessage({ exchange, ticker, price, type });

  // send message
  await groupSend(["09331554655", "09366032534", "09166454134"], message);
  res.send("done");
});

module.exports = router;

//tradingview pattern
//{"exchange": "{{exchange}}","ticker":"{{ticker}}","price":48000,"type":"cross"}
