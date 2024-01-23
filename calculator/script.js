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

let displayValue = "";
let display = document.querySelector("#display");
let displayOperator = document.querySelector("#displayOperator");
let displayOperatorValue = "";
number1 = displayValue;

let buttons = document.querySelectorAll(".calculatorButton");
let currentButton;
let numberOfOperators = 0;
let numberOfDots = 0;
let currentOperator;

buttons.forEach((button) => {
  if (button.id == "button_=")
    button.addEventListener("click", () => {
      (displayValue = "gdshgds"), displayResult();
      displayOperatorValue = "";
      displayOperation();
    });
  else if (button.id == "button_C") {
    button.addEventListener("click", () => {
      displayValue = 0;
      display.innerHTML = displayValue;
    });
  } else if (button.id == "button_+") {
    button.addEventListener("click", () => {
      if (numberOfOperators == 1) displayOperatorValue = displayOperatorValue.slice(0, -1);
      currentOperator = "+";
      displayOperatorValue += currentOperator;
      numberOfOperators = 1;
      displayOperation();
    });
  } else if (button.id == "button_-") {
    button.addEventListener("click", () => {
      if (numberOfOperators == 1) displayOperatorValue = displayOperatorValue.slice(0, -1);
      currentOperator = "-";
      displayOperatorValue += currentOperator;
      numberOfOperators = 1;
      displayOperation();
    });
  } else if (button.id == "button_*") {
    button.addEventListener("click", () => {
      if (numberOfOperators == 1) displayOperatorValue = displayOperatorValue.slice(0, -1);
      currentOperator = "*";
      displayOperatorValue += currentOperator;
      numberOfOperators = 1;
      displayOperation();
    });
  } else if (button.id == "button_/") {
    button.addEventListener("click", () => {
      if (numberOfOperators == 1) if (numberOfOperators == 1) displayOperatorValue = displayOperatorValue.slice(0, -1);
      currentOperator = "/";
      displayOperatorValue += currentOperator;
      numberOfOperators = 1;
      displayOperation();
    });
  } else {
    button.addEventListener("click", () => {
      displayValue += button.innerHTML;
      displayResult();
    });
  }
});

function displayResult() {
  display.innerHTML = displayValue;
}

function displayOperation() {
  displayOperator.innerHTML = displayOperatorValue;
}
