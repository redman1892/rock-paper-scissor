//Computer Selection
const computerPlay = function (arr) {
  let randomIndex = Math.floor(Math.random() * 3);
  return arr[randomIndex];
};
const playChoices = ["Rock", "Paper", "Scissor"];

//Game Function
function playRound(playerSelection) {
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
  }
  if (playerSelection === "Rock" && computerSelection === "Paper") {
    console.log("You Lose! Paper beats Rock.");
  }
  if (playerSelection === "Paper" && computerSelection === "Scissor") {
    console.log("You Lose! Scissor beats Paper.");
  }
  if (playerSelection === "Paper" && computerSelection === "Rock") {
    console.log("You Win! Paper beats Rock.");
  }
  if (playerSelection === "Scissor" && computerSelection === "Paper") {
    console.log("You Win! Scissor beats Paper.");
  }
  if (playerSelection === "Scissor" && computerSelection === "Rock") {
    console.log("You Lose! Rock beats Scissor.");
  }
}
