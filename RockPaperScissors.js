console.log('hi');


const getUserChoice = (userInput) => {  
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
  console.log(`You chose: ${userInput}`);
  return userInput;
  } else { console.log("Error: rock, paper, nor scissors was chosen. Please Try again.");
  return null;
  }
}

function getComputerChoice() {
  let ranNum = Math.floor(Math.random() * 3);
  if (ranNum === 0) {
    ranNum = "rock";
    console.log("Computer chose: rock");
    return ranNum;
  } else if (ranNum === 1) {
    ranNum = "paper";
    console.log("Computer chose: paper");
    return ranNum;
  } else if (ranNum === 2) {
    ranNum = "scissors";
    console.log("Computer chose: scissors");
    return ranNum;
  } 
}


function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return console.log("Tie");
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return console.log("Computer Wins");
    } else {
      return console.log("User Wins")
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return console.log("User Wins");
    } else {
      return console.log("Computer Wins")
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return console.log("Computer Wins")
    } else {
      return console.log("User Wins")
    }
  }
}

function playGame() {
  let userChoice = getUserChoice("rock");
  let computerChoice = getComputerChoice();
  (determineWinner(userChoice,computerChoice))
} ;

playGame()
