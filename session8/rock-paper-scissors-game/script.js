// Rock Paper Scissors
//two people shake and shoot a choice
//players can choose between rock paper or scissors
//the user to make a choice from a user interface/button.
//pass that info to the javascript file
//second is we need the computer to also make a choice,
// randomly simulate a choice for the computer
//store it in a variable
//return teh computer choice

//depending on the choices of the players, one or the other player can win, or there could be a tie
//if user chooses rock
// and computer chooses rock, it's a tie
// and comp chooses paper, comp wins
// and comp chooses scissors, player wins

// Display the info of the result to the DOM

// Helper Function
function getComputerChoice() {
  //Create an array for your choices, rock paper scissors
  const choices = ["rock", "paper", "scissors"];

  //Create a random number and store it in a variable called "index"
  const index = Math.floor(Math.random() * choices.length);
  console.log(index);

  //Return the randomly selected choice
  return choices[index];
}
// console.log(getComputerChoice());

//Helper FUnction
function determineWinner(playerChoice, computerChoice) {
  //Write the logic for a tie, a win, or a loss
  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      return "Its a Tie!";
    } else if (computerChoice === "paper") {
      return "You Lose :(";
    } else {
      return "You Win :) !";
    }
  }

  if (playerChoice === "paper") {
    if (computerChoice === "paper") {
      return "Its a Tie!";
    } else if (computerChoice === "scissors") {
      return "You Lose :(";
    } else {
      return "You Win :) !";
    }
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "scissors") {
      return "Its a Tie!";
    } else if (computerChoice === "rock") {
      return "You Lose :(";
    } else {
      return "You Win :) !";
    }
  }
}
// console.log(determineWinner("rock", "scissors"));

//Main game logic
function playRockPaperScissors(playerChoice) {
  console.log("playerChoice", playerChoice);
  //Get a computer choice and store in a variable
  const computerChoice = getComputerChoice();
  console.log("computerChoice", computerChoice);

  //Determine the winner and story in a variable called "result"
  const result = determineWinner(playerChoice, computerChoice);
  // determineWinner(playerChoice, computerChoice);

  //Update the DOM with the current round result
  document.getElementById("result").innerHTML = `
                Player chooses: ${playerChoice}<br>
                Computer chooses: ${computerChoice}<br>
                ${result}
            `;
}
