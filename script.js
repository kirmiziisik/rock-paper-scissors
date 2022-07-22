const result = document.querySelector(".curResult");
const score = [0, 0];

const compSelections = ["rock", "paper", "scissors"];
let playerChoice;
let computerChoice;

const getComputerChoice = function () {
  computerChoice = compSelections[Math.floor(Math.random() * 3)];
  return computerChoice;
};

const logEndResult = function () {
  return (result.textContent = `${score[0] > score[1] ? "Computer" : "Player"} won`);
};

const computerWinRound = function () {
  score[1]++;
  if (score[0] >= 5 || score[1] >= 5) result.textContent = `${score[0] > score[1] ? "Computer" : "Player"} won`;
  else return (result.textContent = `Computer chose ${computerChoice}. Computer: ${score[0]} Player: ${score[1]}`);
};

const playerWinRound = function () {
  score[0]++;
  if (score[0] >= 5 || score[1] >= 5) result.textContent = `${score[0] > score[1] ? "Computer" : "Player"} won`;
  else return (result.textContent = `Computer chose ${computerChoice}. Computer: ${score[0]} Player: ${score[1]}`);
};

const logResult = function () {
  if (computerChoice === playerChoice) {
    if (score[0] >= 5 || score[1] >= 5) result.textContent = `${score[0] > score[1] ? "Computer" : "Player"} won`;
    else return (result.textContent = `Computer chose the same. Computer: ${score[0]} Player: ${score[1]}`);
  }
  if (computerChoice === "rock" && playerChoice === "paper") computerWinRound();
  if (computerChoice === "rock" && playerChoice === "scissors") playerWinRound();
  if (computerChoice === "paper" && playerChoice === "rock") playerWinRound();
  if (computerChoice === "paper" && playerChoice === "scissors") computerWinRound();
  if (computerChoice === "scissors" && playerChoice === "rock") computerWinRound();
  if (computerChoice === "scissors" && playerChoice === "paper") playerWinRound();
};

const playRound = function () {
  getComputerChoice();
  if (score[0] < 5 && score[1] < 5) logResult();
};

const btnRock = document.querySelector(".btnRock");
btnRock.addEventListener("click", function () {
  playerChoice = "rock";
  playRound();
});

const btnPaper = document.querySelector(".btnPaper");
btnPaper.addEventListener("click", function () {
  playerChoice = "paper";
  playRound();
});

const btnScissors = document.querySelector(".btnScissors");
btnScissors.addEventListener("click", function () {
  playerChoice = "scissors";
  playRound();
});
