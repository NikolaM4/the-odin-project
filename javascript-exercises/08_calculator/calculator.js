const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  let sumOfNumbers = 0;
  if (numbers.length == 0) return sumOfNumbers;
  numbers.forEach((number) => {
    sumOfNumbers += number;
  });
  return sumOfNumbers;
};

const multiply = function (numbers) {
  let product = 1;
  numbers.forEach((number) => {
    product *= number;
  });
  return product;
};

const power = function (a, n) {
  return Math.pow(a, n);
};

const factorial = function (number) {
  if (number == 0 || number == 1) return 1;
  else return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
