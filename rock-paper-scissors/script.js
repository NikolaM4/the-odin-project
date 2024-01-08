function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection == "rock")
    if (computerSelection == "scissors") return "You win! Rock beats Scissors";
    else if (computerSelection == "paper") return "You Lose! Paper beats Rock";
    else return "It's draw";
  else if (playerSelection == "paper")
    if (computerSelection == "scissors") return "You Lose! Scissors beats Paper";
    else if (computerSelection == "rock") return "You win! Paper beats Rock";
    else return "It's draw";
  else if (playerSelection == "scissors")
    if (computerSelection == "rock") return "You Lose! Rock beats Scissors";
    else if (computerSelection == "paper") return "You win! Scissors beats Paper";
    else return "It's draw";
  return;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
