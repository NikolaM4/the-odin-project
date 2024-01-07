function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  return;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
