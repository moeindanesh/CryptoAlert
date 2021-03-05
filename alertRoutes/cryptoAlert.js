const express = require("express");
const { createMessage } = require("../utils/create-message");
const { groupSend } = require("../utils/send-sms");

const router = express.Router();

router.post("/cryptoalert/alert", async (req, res) => {
  console.log({ req });
  let body = req.body;
  let { exchange, currency, price, direction, target_currency } = body;

  let ticker = `${currency}${target_currency}`;

  if (!ticker || !exchange || !price || !direction) {
    res.send("faild");
    return;
  }

  //create message
  let message = createMessage({ exchange, ticker, price, type: direction });

  // send sms
  await groupSend(["09331554655", "09366032534", "09166454134"], message);
  res.send("done");
});

module.exports = router;

// {
//     "type": "price",
//     "message": "Bitcoin (BTC) went above 47,050.00 USDT on Binance.",
//     "currency": "BTC",
//     "direction": "above",
//     "price": "47,050.00",
//     "target_currency": "USDT",
//     "exchange": "Binance"
//   }
