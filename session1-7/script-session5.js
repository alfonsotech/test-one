// Primitive Data Types (5 types)
// Variables (let and const)
// typeof keyword
// console.log()
// GIt and GIthub Basics
// Operators (Arithmetic, Comparison, Logical)
// If-Else statements (Conditionals)
// Functions (2 kinds, Function Declarations and FunctionExpressions)
// Arrays, bracket notation
// Simpe Array Methods ( .pop(), .push(), .shift(), .unshift(), .slice(), .splice(), .indexOf() )
// FOR LOOPs, for in, for of

// UPCOMING TOPICS:
// While-loop
// Objects, structure, dot notation, setter and getter, delete, methods
// For-In, For-Of loop
//Simple Object methods
//Complex data structures
//DOM and DOM manipulation

// Problem 0
// Type Checker
// Problem Description:
// Write a function named typeCheck that takes any value as an argument and checks its type. The function should:

// Print "It's a string!" if the value is of type string.
// Print "It's a number!" if the value is of type number.
// Print "It's a boolean!" if the value is of type boolean.
// For any other type, print "This is something else.".

function typeCheck(value) {
  if (typeof value === "string") {
    return "Its a string!";
  } else if (typeof value === "number") {
    return "It's a number";
  } else if (typeof value === "boolean") {
    return "It's a boolean";
  } else {
    return "This is something else.";
  }
}
console.log(typeCheck("hello World"));
console.log(typeCheck(42));
console.log(typeCheck(true));
console.log(typeCheck(undefined));

// Problem 1
// Event Scheduler
// Problem Description:
// You have been tasked with creating a simple event scheduler that can add events to a schedule and check if an event is already scheduled. The scheduler should:

// Start with an empty array of events.
// Have a function to add an event if it's not already in the schedule. Each event will be represented by a string.
// Have a function to check if an event is already scheduled.
// Print a message to the console whenever an event is added or if an attempt is made to add a duplicate event.

// Problem 2
// Fizz Buzz Problem:
// Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

// Specifically, the rules are:

// When a number is a multiple of 3, print "Fizz".
// When a number is a multiple of 5, print "Buzz".
// When a number is both a multiple of 3 and 5, print "FizzBuzz".
// If none of the above conditions are true, print the number itself.
// Sample Output:
// 1;
// 2;
// Fizz;
// 4;
// Buzz;
// Fizz;
// 7;
// 8;
// Fizz;
// Buzz;
// 11;
// Fizz;
// 13;
// 14;
// FizzBuzz;

function fizzBuzz() {
  for (let i = 1; i <= 30; i++) {
    // console.log(i);
    if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz();

// Problem 4
// Simple Password Validator
// Problem Description:

// Write a function called validatePassword that takes a single argument, a string representing a password, and validates it based on the following criteria:

// The password must be at least 8 characters long.
// The password must contain at least one digit (0-9).
// The password must have at least one uppercase letter.
// The function should print messages based on whether the password meets these criteria:

// If the password meets all the criteria, print "Password is valid."
// If the password fails any of the criteria, print why the password is invalid, according to which criteria it failed (e.g., "Password is too short.", "Password needs a digit.", or "Password needs an uppercase letter.")

// Problem 5
// Fortune Teller
// Problem Description:
// Create a function called tellFortune that randomly selects a fortune from a predefined list of fortunes whenever it's called and prints it to the console.

// Steps:
// Define an array named fortunes that contains at least five different fortune strings. Feel free to be creative with these!
// Implement the tellFortune function that randomly chooses one of the fortunes to "tell" and then prints it.
// Use the Math.random() function to help select a random fortune.

let tellFortune = function () {
  const fortunes = [
    "You will discover a new talent within yourself.",
    "A thrilling time is in your immediate future.",
    "Opportunity knocks on your door softly, be ready to open it.",
    "A pleasant surprise is waiting for you.",
    "Someone will call you with great news soon.",
  ];

  let index = Math.floor(Math.random() * 5);
  console.log("index", index);
  console.log(fortunes[index]);
};

tellFortune();

// Problem 6 - Hard
// Simple Quiz Program
// Problem Description:

// Create a function called runQuiz that presents a series of questions to the user, takes their answers, and then calculates their score based on how many answers they got right.

// Steps:

// Define an array of objects, where each object represents a quiz question, the available options, and the correct answer.
// Loop through each question, prompt the user for an answer, and keep track of the score.
// After all questions have been answered, print the user's score.
// Sample Code Skeleton:

// For simplicity, we'll use console.log for output and a simple input mechanism (you could use prompt in a browser environment, but let's assume responses are provided via a function call for this example).
