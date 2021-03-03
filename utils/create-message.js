const createMessage = ({ exchange, ticker, price, type }) => {
  let description = "عبور کرد";

  switch (type) {
    case "cross":
      description = `عبور کرد`;
      break;
    case "greater than":
      description = `بیشتر شد`;
      break;
    case "lower than":
      description = `کمتر شد`;
      break;
  }

  return `نماد ${ticker} در صرافی ${exchange} از قیمت ${price} ${description}`;
};

module.exports = {
  createMessage,
};
