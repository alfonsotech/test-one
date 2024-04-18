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
