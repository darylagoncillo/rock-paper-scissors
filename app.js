// Get player's choice
function getPlayerChoice() {
  let userInput = prompt("Select 1 for ROCK-- 2 for PAPER-- 3 for SCISSORS");
  // userInput takes in a string bc of prompt
  // so we user parseInt() to convert it into an integer for the switch case
  let numericInput = parseInt(userInput);

  switch (numericInput) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
  }
}
// Computer's Choice
function getComputerChoice() {
  let randomDecimal = Math.random();
  let randomNum = Math.floor(randomDecimal * 3) + 1;

  switch (randomNum) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
  }
}

// Play a round
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

// Set picks
const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();

console.log(playRound(playerChoice, computerChoice));
