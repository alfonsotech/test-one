class Game {
  constructor() {
    this.choices = ["rock", "paper", "scissors"];
  }

  getComputerChoice() {
    const index = Math.floor(Math.random() * this.choices.length);
    return this.choices[index];
  }

  determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    }

    if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }

  play(playerChoice) {
    const computerChoice = this.getComputerChoice();
    const result = this.determineWinner(playerChoice, computerChoice);
    document.getElementById("result").innerHTML = `
                    Player chooses: ${playerChoice}<br>
                    Computer chooses: ${computerChoice}<br>
                    ${result}
                `;
  }
}

const game = new Game();

// <button onclick="game.play('rock')">Rock</button>
// <button onclick="game.play('paper')">Paper</button>
// <button onclick="game.play('scissors')">Scissors</button>
