function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection == "rock")
    if (computerSelection == "scissors") return "You Win! Rock beats Scissors";
    else if (computerSelection == "paper") return "You Lose! Paper beats Rock";
    else return "It's tie";
  else if (playerSelection == "paper")
    if (computerSelection == "scissors") return "You Lose! Scissors beats Paper";
    else if (computerSelection == "rock") return "You Win! Paper beats Rock";
    else return "It's tie";
  else if (playerSelection == "scissors")
    if (computerSelection == "rock") return "You Lose! Rock beats Scissors";
    else if (computerSelection == "paper") return "You Win! Scissors beats Paper";
    else return "It's tie";
  return;
}

let playerSelection;
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;
let result = "";

let divResults = document.createElement("div");
divResults.textContent = `${playerScore} : ${computerScore}`;

let buttonRock = document.createElement("button");
let buttonPaper = document.createElement("button");
let buttonScissors = document.createElement("button");

buttonRock.textContent = "Rock";
buttonPaper.textContent = "Paper";
buttonScissors.textContent = "Scissors";

document.body.appendChild(divResults);
document.body.appendChild(buttonRock);
document.body.appendChild(buttonPaper);
document.body.appendChild(buttonScissors);

function checkWinner(playerScorem, computerScore) {
  if (playerScore == 5) {
    divResults.textContent += "You Win!";
    buttonRock.disabled = true;
    buttonPaper.disabled = true;
    buttonScissors.disabled = true;
  }
  if (computerScore == 5) {
    divResults.textContent += "You Lose!";
    buttonRock.disabled = true;
    buttonPaper.disabled = true;
    buttonScissors.disabled = true;
  }
}

buttonRock.addEventListener("click", () => {
  playerSelection = "rock";
  computerSelection = getComputerChoice();
  result = playRound(playerSelection, computerSelection);
  if (result.includes("Win")) {
    playerScore++;
    divResults.textContent = `${playerScore} : ${computerScore}`;
  } else if (result.includes("Lose")) {
    computerScore++;
    divResults.textContent = `${playerScore} : ${computerScore}`;
  }
  checkWinner(playerScore, computerScore);
});

buttonPaper.addEventListener("click", () => {
  playerSelection = "paper";
  computerSelection = getComputerChoice();
  result = playRound(playerSelection, computerSelection);
  if (result.includes("Win")) {
    playerScore++;
    divResults.textContent = `${playerScore} : ${computerScore}`;
  } else if (result.includes("Lose")) {
    divResults.textContent = `${playerScore} : ${computerScore}`;
    computerScore++;
  }
  checkWinner(playerScore, computerScore);
});

buttonScissors.addEventListener("click", () => {
  playerSelection = "scissors";
  computerSelection = getComputerChoice();
  result = playRound(playerSelection, computerSelection);
  if (result.includes("Win")) {
    playerScore++;
    divResults.textContent = `${playerScore} : ${computerScore}`;
  } else if (result.includes("Lose")) {
    divResults.textContent = `${playerScore} : ${computerScore}`;
    computerScore++;
  }
  checkWinner(playerScore, computerScore);
});
