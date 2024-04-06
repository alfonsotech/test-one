//OPERATORS
//Arithmetic: +, -, *, /, %
//Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
//Use With Strings
console.log("banana" > "apple"); // true (b comes after a)
console.log("banana" >= "banana"); // true (equal to)
console.log("apple" > "orange"); // false (a comes before o)

console.log("apple" < "banana"); // true (a comes before b)
console.log("banana" <= "banana"); // true (equal to)
console.log("orange" < "apple"); // false (o comes after a)

//Logical Operators: &&, ||,  !

//Assignment Operators: =, +=, -=
let x = 10; // assigns the value 10 to variable x

let y = 5;
y += 3; // equivalent to
y = y + 3; // x will be 8

let greeting = "Hello";
greeting += " World!";
console.log(greeting); // Output: Hello World!

let z = 5;
z -= 3; // equivalent to z = z - 3; // x will be 2

//Unary Operators: +, -, ++, --
// // Unary Plus (+): Attempts to convert its operand to a number.
// let x = "5";
// console.log(+x); // 5

// // // Unary Negation (-): Attempts to convert its operand to a number and then negates it.
// let y = "5";
// console.log(-y); // -5

// // //Increment (++) and Decrement (--): These operators add or subtract 1 from their operand.
// let z = 5;
// z++; // equivalent to z = z + 1;
// console.log(z); // 6

// Ternary Operator (Conditional Operator):
let result = 5 > 3 ? "Yes" : "No"; // result will be "Yes"
console.log(result);

// let age = 20;
// age > 18 ? "Yes" : "No";
// if (age > 18) {
//   return "yes";
// } else {
//   return "No";
// }

// for() {

// }

//Typeof Operator

//Delete Operator
let obj = { a: 1, b: 2 };
delete obj.a; // Removes property 'a' from obj
console.log(obj); // {b:2}

// New Operator
let today = new Date(); // Creates a new Date object
console.log(today);
//computer time / unix time /epoch time
// Unix time, also known as Epoch time or POSIX time, is a system for tracking time in computing systems. It represents the number of seconds that have elapsed since the Unix epoch, which is defined as January 1, 1970, at 00:00:00 UTC (Coordinated Universal Time).

//FUNCTIONS
// Function declaration and expression
// Function parameters and arguments

// let number = 11
// function myFunc(num) {
//  let name = "Corry";
//  return num++

// }
// console.log(name);//undefined
// myFunc(number);

// Return statement
// Scope (global scope, function scope, block scope)

//Anonymous Function
// An anonymous function is a function that is defined without a name. It is often used as a callback function or assigned to a variable. We have already seen this.
let myFunction = function () {
  console.log("This is an anonymous function.");
};

// Function that accepts a callback
function greet(name, callback) {
  console.log("Hello, " + name + "!");
  // Invoke the callback function
  callback();
}

// Callback function
function sayGoodbye() {
  console.log("Goodbye!");
}

// Calling the greet function with a callback
greet("Alice", sayGoodbye);

// // Calling the anonymous function
// myFunction();

// Event handler with an anonymous function
document.getElementById("myButton").addEventListener("click", function () {
  console.log("Button clicked!");
});

//Arrow Functions:
// Arrow functions are a more concise way of writing anonymous functions. They are introduced in ECMAScript 6 (ES6) and have a shorter syntax compared to traditional function expressions.
// Arrow function without parameters
let greet = (nane) => {
  return `Hello ${name}`;
};

// let greet = name => `Hello ${name}`;

greet(); // Output: Hello, world!

//More concise
// Arrow function with one statement
// let greet = () => console.log("Hello, world!");

// greet(); // Output: Hello, world!

///

//FUNCTIONAL PROGRAMING: Advanced Array Methods
//Map, Filter, and Reduce

//Array Methods, String Methods
// String Methods:
// JavaScript provides various built-in methods for manipulating strings, such as charAt(), substring(), slice(), toUpperCase(), toLowerCase(), trim(), split(), indexOf(), lastIndexOf(), and many more. These methods allow you to perform tasks like extracting substrings, converting case, trimming whitespace, splitting strings into arrays, etc.

//Regular Expressions
//Switch Statement

//INTERMEDIATE TOPICS
// Classes and inheritance
// DOM manipulation

// Promises and async/await
// Destructuring
// Spread/rest operators
// Default parameters

// Event handling
// AJAX and Fetch API
// Local storage
// Web APIs (Canvas, Geolocation, etc.)
