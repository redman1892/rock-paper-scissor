//Computer Selection
const computerPlay = function (arr) {
  let randomIndex = Math.floor(Math.random() * 3);
  return arr[randomIndex];
};
const playChoices = ["Rock", "Paper", "Scissor"];

//Game Function

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
  console.log(playerScore, computerScore);
  if (playerScore > 2) {
    alert("You WIN! Start game again.");
    playerScore = 0;
    computerScore = 0;
    return;
  }
  if (computerScore > 2) {
    alert("You LOSE! Start game again.");
    playerScore = 0;
    computerScore = 0;
    return;
  }

  let computerSelection = computerPlay(playChoices);
  console.log(
    `You chose ${playerSelection}. Computer chose ${computerSelection}`
  );
  //Game Logic
  if (playerSelection === computerSelection) {
    console.log("Its a Draw!");
  }

  if (playerSelection === "Rock" && computerSelection === "Scissor") {
    console.log("You Win! Rock beats Scissor.");
    playerScore++;
  }
  if (playerSelection === "Rock" && computerSelection === "Paper") {
    console.log("You Lose! Paper beats Rock.");
    computerScore++;
  }
  if (playerSelection === "Paper" && computerSelection === "Scissor") {
    console.log("You Lose! Scissor beats Paper.");
    computerScore++;
  }
  if (playerSelection === "Paper" && computerSelection === "Rock") {
    console.log("You Win! Paper beats Rock.");
    playerScore++;
  }
  if (playerSelection === "Scissor" && computerSelection === "Paper") {
    console.log("You Win! Scissor beats Paper.");
    playerScore++;
  }
  if (playerSelection === "Scissor" && computerSelection === "Rock") {
    console.log("You Lose! Rock beats Scissor.");
    computerScore++;
  }
}
console.log(`Your Score is ${playerScore}, Computer Score is ${computerScore}`);
// }
