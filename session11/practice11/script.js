// Warm Up Exercise 1: Data Types and Variables
// Objective: Practice defining variables and using basic data types.

// Create variables to store the following pieces of data:
// Your name (as a string)
const name = "bob";
// Your age (as a number)
let age = 35;
// Whether you are a student or not (as a boolean)
let student = true;
// Print each variable to the console.
console.log(name, age, student);
// Concatenate your name and age and print a sentence that uses both.
console.log(`i am ${name} and i am ${age} years old.`);

// Warm Up Exercise 2: Basic Conditional Logic
// Objective: Use a conditional statement to perform different actions based on the value of a variable.

// Write a function called evaluateGrade that takes a number as an argument and returns a grade ('A', 'B', 'C', 'D', 'F') based on the number:
// 90 and above should return 'A'
// 80 to 89 should return 'B'
// 70 to 79 should return 'C'
// 60 to 69 should return 'D'
// Below 60 should return 'F'

function evaluateGrade(number) {
  if (number >= 90) {
    return "A";
  } else if (number >= 80 && number <= 89) {
    return "B";
  } else if (number >= 70 && number <= 79) {
    return "C";
  } else if (number >= 60 && number <= 69) {
    return "D";
  } else {
    return "F";
  }
}

console.log(evaluateGrade(54));

// Warm UP Exercise 3: Arrays and Loops
// Objective: Work with arrays and loops.

// Create an array that holds the names of four different fruits.
// Use a loop to print each fruit to the console.
// Add a condition inside the loop to print a special message if the fruit is 'Apple'.
let fruits = ["Apple", "Banana", "Cherry", "Date"];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i].toLowerCase() === "apple") {
    console.log("yay you got apple!");
  } else {
    console.log(fruits[i]);
  }
}
//
// Number Guessing Game from MDN Docs
// I want you to create a simple guess the number type game. It should choose a random number between 1 and 100, then challenge the player to guess the number in 10 turns. After each turn, the player should be told if they are right or wrong, and if they are wrong, whether the guess was too low or too high. It should also tell the player what numbers they previously guessed. The game will end once the player guesses correctly, or once they run out of turns. When the game ends, the player should be given an option to start playing again.

// Pseudo-Code
// 1. Start the game
// 2. Generate a random number between 1 and 100
// 3. Initialize a counter for the number of guesses (max 10)
// 4. Create an empty list to store the player's previous guesses

// 5. While the number of guesses is less than 10:
//    a. Prompt the player to make a guess
//    b. Record the player's guess in the list of previous guesses
//    c. If the guess is equal to the random number:
//       - Inform the player that they have guessed correctly
//       - Break out of the loop
//    d. Else if the guess is lower than the random number:
//       - Inform the player that their guess was too low
//       - Show the list of previous guesses
//    e. Else:
//       - Inform the player that their guess was too high
//       - Show the list of previous guesses
//    f. Increment the guess counter

// 6. If the player has used all 10 guesses without guessing correctly:
//    - Inform the player that they have not guessed the number
//    - Show the correct number

// 7. Ask the player if they want to play again:
//    a. If yes, restart the game
//    b. If no, end the game
