console.log("hello form session 2");

//Review topics:
// 1. Primitive Data Types
// 2. Variables
// 3. Arithmetic Operators
// 4. Conditionals if-else

// Problem 1: Working with Strings
// Define two string variables, firstName and lastName. Assign your first name to firstName and your last name to lastName. Then, create a new variable fullName that concat firstName and lastName with a space in between and log fullName to the console.
// TODO:
const firstName = "David";
const lastName = "Vargas";
const fullName = `${firstName} ${lastName}`;

console.log("fullName", fullName);

// Problem 2: Using Conditional Statements
// Create a JavaScript program that defines a variable age and assigns it your age. Use a conditional statement (if-else) to check if age is greater than 18. If true, log "You are an adult." to the console. Otherwise, log "You are a minor.".
// TODO:
let age = 15;
if (age > 18) {
  console.log("You are an adult.");
} else if (age <= 18) {
  console.log("You are a minor.");
}

// Problem 3: Understanding undefined and null
// Define two variables, x and y. Do not initialize x, leaving it undefined, and explicitly set y to null. Write a conditional statement that checks if x is undefined and y is null, and logs "x is undefined and y is null." to the console.
// TODO:
let x = undefined;
let y = null;
if (x === undefined && y === null) {
  console.log("x is undefined and y is null");
}

// Today's Topics:
// 5. Comparison Operators: ==, ===, !=, !==, >, <, >=, <=

//Shallow or Simple Equality
console.log(5 != 5); // false
console.log(5 != "5"); //false
console.log(5 != 15); //true

//Strict Equality - checks value and typeof
console.log(5 !== "5"); //true
console.log(5 !== 5); //false

//Greater THan
console.log(10 > 5); // true
console.log(5 >= 5); // true
console.log(15 >= 5); // true
console.log(5 >= 15); // false

//Less Than
console.log(5 < 10); // true
console.log(5 <= 5); // true
console.log(15 <= 5); // false
console.log(5 <= 15); // true

// 6. Logical Operators: &&, ||, !

// AND
// true &&
//   true(
//     //true
//     5 <= 5
//   ) &&
//   15 >= 5;
// true && true; // true

// true && false; //false
// false && true; //  false
// false && false; // false

// //OR ||
// true || true; // true
// true || false; // true
// false || true; // true

// //Bang !
// !true; // false
// !false; // true
// !!true; // true
// !!false; //false
console.log(!0); //true, 0 is a falsy value
console.log(!!0); //false

// false || false; // false

//falsy
0;
false;
undefined;
null;
NaN;
("");
// 7. Function Declaration
console.log(sayHello("Rita")); //argument, func call

function sayHello(name) {
  //parameter when you define
  return `Hello ${name}`;
}

console.log(sayHello("Jane")); //argument, func call

// 8. Function Expression
///////

const greet = function (name) {
  let statement = "Hello, " + name + "!";
  return statement;
};
console.log(greet("David"));

//hoisting

//calculator funciton
// write a function declaration called calculator that takes in two numbers and an operation, and returns that output of performing that operation on the two numbers.

function calculator(a, b, operator) {
  if (operator === "add") {
    return a + b;
  } else if (operator === "subtract") {
    return a - b;
  } else if (operator === "multiply") {
    return a * b;
  } else if (operator === "divide") {
    return a / b;
  }
}

console.log(calculator(2, 5, "multiply"));

//Coming up next: Arrays, Simple Array Methods, For-Loop
