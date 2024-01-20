function add(number1, number2) {
  return number1 + number2;
}

function substract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

let number1;
let number2;
let operator;

function operate(number1, operator, number2) {
  if (operator == "+") add(number1, number2);
  else if (operator == "-") substract(number1, number2);
  else if (operator == "*") multiply(number1, number2);
  else if (operator == "/") divide(number1, number2);
}

let displayValue = 0;
let display = document.querySelector("#display");
number1 = displayValue;

let buttons = document.querySelectorAll(".calculatorButton");
let currentButton;
let numberOfOperators = 0;

buttons.forEach((button) => {
  if (button.id == "button_=")
    button.addEventListener("click", () => {
      (displayValue = "gdshgds"), displayResult();
    });
  else if ((button.id = "button_C"))
    button.addEventListener("click", () => {
      displayValue = 0;
      display.innerHTML = displayValue;
    });
});

function displayResult() {
  display.innerHTML = displayValue;
}
