const resultCurrent_id = document.getElementById("result-current");
const resultExplanation_id = document.getElementById("result-explanation");
const userChoice_p = document.querySelector(".user-choice");
const computerChoice_p = document.querySelector(".computer-choice");
const userScore_p = document.querySelector(".user-score");
const computerScore_p = document.querySelector(".computer-score");
const rock_btn = document.getElementById("rock");
const paper_btn = document.getElementById("paper");
const scissors_btn = document.getElementById("scissors");

let userScore = 0;
let computerScore = 0;

// User choices
rock_btn.addEventListener("click", function () {
  userChoice = "Rock";
  userChoice_p.innerHTML = "✊";
  console.log("You pressed rock");
  playGame(userChoice);
});

paper_btn.addEventListener("click", function () {
  userChoice = "Paper";
  userChoice_p.innerHTML = "✋";
  console.log("You pressed paper");
  playGame(userChoice);
});

scissors_btn.addEventListener("click", function () {
  userChoice = "Scissors";
  userChoice_p.innerHTML = "✌";
  console.log("You pressed scissors");
  playGame(userChoice);
});

// Computer choices
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"]; // 0, 1, 2 index
  let randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
  if (randomNumber == 0) {
    computerChoice_p.innerHTML = "✊";
  } else if (randomNumber == 1) {
    computerChoice_p.innerHTML = "✋";
  } else if (randomNumber === 2) {
    computerChoice_p.innerHTML = "✌";
  }
  return choices[randomNumber];
}

function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  if (userScore < 5 && computerScore < 5) {
    if (userChoice === computerChoice) {
      resultCurrent_id.innerHTML = "It's a tie... 😬";
      resultExplanation_id.innerHTML =
        userChoice + " ties with " + computerChoice;
      return "It's a tie!";
    } else if (
      (userChoice === "Rock" && computerChoice === "Scissors") ||
      (userChoice === "Paper" && computerChoice === "Rock") ||
      (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
      userScore++;
      resultCurrent_id.innerHTML = "You won! 🔥";
      resultExplanation_id.innerHTML = userChoice + " beats " + computerChoice;
      userScore_p.innerHTML = "Player: " + userScore;
      return "You win!";
    } else {
      computerScore++;
      resultCurrent_id.innerHTML = "You lost! 💩";
      resultExplanation_id.innerHTML = computerChoice + " beats " + userChoice;
      computerScore_p.innerHTML = "Computer: " + computerScore;
      return "Computer wins!";
    }
  } else if (userScore === 5) {
    alert("You have won the game!");
    location.reload();
  } else {
    alert("You have lost the game!");
    location.reload();
  }
}
