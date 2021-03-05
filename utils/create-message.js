const createMessage = ({ exchange, ticker, price, type }) => {
  let verb = "عبور کرد";

  switch (type) {
    case "cross":
      verb = `عبور کرد`;
      break;
    case "greater than":
      verb = `بیشتر شد`;
      break;
    case "lower than":
      verb = `کمتر شد`;
      break;
    case "above":
      verb = "بیشتر شد";
      break;
    case "below":
      verb = "کمتر شد";
      break;
    default:
      verb = "عبور کرد";
      break;
  }

  return `نماد ${ticker} در صرافی ${exchange} از قیمت ${price} ${verb}`;
};

module.exports = {
  createMessage,
};
