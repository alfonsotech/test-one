console.log("hello from session 6");
// Primitive Data Types (5 types)
// Variables (let and const)
// typeof keyword
// console.log()
// Git and Github Basics
// Operators (Arithmetic, Comparison, Logical) && AND || OR !NOT
// If-Else statements (Conditionals)
// Functions (2 kinds, Function Declarations and FunctionExpressions)
// Arrays, bracket notation
// Simpe Array Methods ( .pop(), .push(), .shift(), .unshift(), .slice(), .splice(), .indexOf() )
// FOR LOOPs, for in, for of
// UPCOMING TOPICS:
// While-loop
// Objects, structure, dot notation, setter and getter, delete, methods
// For-In loop
//Complex data structures
//DOM and DOM manipulation
// Review Problems
// Problem 1: Sum of an Array
// Write a JavaScript function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.
function sumArray(arr) {
  console.log(arr);
  let sum = 0; //typeof

  // TODO: add your code here
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
// Example usage:
console.log(sumArray([1, 2, 3, 4])); // Outputs: 10

// Problem 2: Find the Largest Number
// Write a function that takes an array of numbers and returns the largest number in the array.
function findLargest(arr) {
  let largest = 0;
  // TODO: add your code here
  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  return largest;
}
// Example usage:
console.log(findLargest([10, 4, 2, 30, 15])); // Outputs: 30

console.log(findLargest([45, 3, 69, 23, 98, 13]));
// Problem 3: Counting All Elements
// Write a JavaScript function that takes a matrix (an array of arrays) of numbers and returns the total number of elements in the matrix.
function countElements(matrix) {
  let count = 0;
  // TODO: add your code here
  for (let i = 0; i < matrix.length; i++) {
    count = count + matrix[i].length;
    for (let j = 0; j < matrix[i].length; j++) {
      count = count + matrix[i][j].length;
    }
  }

  return count;
}
// Example usage:
console.log(
  countElements([
    [1, [2, 3]],
    [4, 5],
    [6, 7, 8],
  ])
); // Outputs: 7

// WHILE LOOP
// A while loop in JavaScript (and most other programming languages) repeatedly executes a block of code as long as a specified condition is true. It's particularly useful when you don't know in advance how many times you need to execute a loop. The basic syntax of a while loop is as follows:
// while (condition) {
//   // code block to be executed
// }
let count = 5; // Start counting from 1

while (count <= 10) {
  console.log(count); // Print the current count
  count++; // Increment the count by 1
}
// Problem 1: Reverse a String
// Write a JavaScript function that takes a string as input and returns the reverse of that string. Use a while loop to achieve this.
function reverseString(str) {
  let reversed = ""; // This will hold the reversed string
  let index = str.length - 1; // Start from the last character of the string

  while (index >= 0) {
    reversed += str[index]; // Add the current character to the reversed string
    index--; // Move to the previous character
  }

  return reversed;
}
// Example usage:
console.log(reverseString("hello")); // Outputs: "olleh"

// Problem Breakdown:
// You need to iterate over the string from the last character to the first.
// Concatenate these characters in reverse order.
// Return the reversed string.
function reverseString(str) {
  let reversed = ""; // This will hold the reversed string
  let index = str.length - 1; // Start from the last character of the string

  while (index >= 0) {
    reversed += str[index]; // Add the current character to the reversed string
    index--; // Move to the previous character
  }

  return reversed;
}
// Example usage:
// console.log(reverseString("hello")); // Outputs: "olleh"
// Problem 2: Count Up to a Limit
// Write a JavaScript function that starts counting from 1 and stops when it reaches a specified limit, inclusive. The function should print each number to the console.
function countUp(limit) {
  let number = 1; // Start counting from 1

  // TODO: add your code here
}
// Example usage:
// countUp(5);
// Outputs:
// 1
// 2
// 3
// 4
// 5
// Problem 3: Count Down to 1
// Write a JavaScript function that takes a positive integer as input and prints a countdown from that number to 1.
function countDown(start) {
  // TODO: add your code here
  console.log("Done!");
}
// Example usage:
// countDown(5);
// Outputs:
// 5
// 4
// 3
// 2
// 1
// Done!
//OBJECTS
const person = {
  name: "John",
  age: 30,
  isStudent: false,
};
//BRACKET NOTATION
console.log(person["name"]); // Outputs: 30

//DOT NOTATION GETTER
console.log(person.age); // Outputs: John

console.log(person.isStudent);
//SETTER
person.email = "john@example.com"; // Adds a new key "email"

console.log(person);
//camel case
person.isStudent = true; // Changes the value of "isStudent"

console.log(person.isStudent);
//FOR-IN LOOP
// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }
for (let key in person) {
  if (key === "age") {
    console.log(person[key]); // 30
    person[key] = person[key] + 1;
  }
}
console.log(person);
