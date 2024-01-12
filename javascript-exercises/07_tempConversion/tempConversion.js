const convertToCelsius = function (tempInFahr) {
  return Math.round((tempInFahr - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (tempInCels) {
  return Math.round((tempInCels * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
