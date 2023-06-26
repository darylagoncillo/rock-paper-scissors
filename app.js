// Get player's choice
/*function getPlayerChoice() {
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
    default:
      return "Invalid input";
  }
} */

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

// Full 5 round game
function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let rounds = 0;

  while (rounds < 5) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);

    if (result === "You win!") {
      playerScore++;
    } else if (result === "Computer wins!") {
      computerScore++;
    }
    console.log("Player Choice:", playerChoice);
    console.log("Computer Choice:", computerChoice);
    console.log("Current score:\nPlayer: " + playerScore + " Computer: " + computerScore)
    console.log("")
    rounds += 1;
  }

  if (playerScore > computerScore) {
    console.log("Congratulations! You've won!");
  } else {
    console.log("Sorry, you've lost!");
  }
}
// Let the games begin!
playGame();
