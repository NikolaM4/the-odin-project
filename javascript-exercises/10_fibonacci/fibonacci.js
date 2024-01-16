const fibonacci = function (number) {
  if (number < 0) return "OOPS";
  let fibonacciSum;
  let num1 = 1,
    num2 = 1;
  if (+number == 0) return 0;
  else if (+number == 1) return 1;
  else if (+number == 2) return 1;
  for (let i = 3; i <= +number; i++) {
    fibonacciSum = num1 + num2;
    num1 = num2;
    num2 = fibonacciSum;
  }
  return fibonacciSum;
};

// Do not edit below this line
module.exports = fibonacci;
