const axios = require("axios");
const Kavenegar = require("kavenegar");
const SMS_API =
  "7839743679596E57502B5874556571614C7471765835505672553934366A4D58527777724F684D69494A453D";

const api = Kavenegar.KavenegarApi({
  apikey: SMS_API,
});

const groupSend = async (numbers, message) => {
  api.Send(
    { message, sender: "10008663", receptor: numbers },
    function (response, status) {
      console.log(response);
      console.log(status);
    }
  );
};

module.exports = {
  groupSend,
};
