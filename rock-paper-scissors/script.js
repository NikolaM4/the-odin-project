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

function game() {
  let playerSelection;
  let computerSelection = getComputerChoice();
  let playerScore = 0;
  let computerScore = 0;
  let result = "";
  for (let i = 1; i <= 5; i++) {
    playerSelection = prompt("Input Rock, Paper or Scissors");
    computerSelection = getComputerChoice();
    result.includes("Win") ? playerScore++ : computerScore++;
    console.log(result);
  }
  playerScore > computerScore ? console.log("You Win!") : console.log("You Lose!");
}

game();
