// console.log("hello from the js file");

// //Primitive Data Type
// //string
// ("hello");
// ("34");
// "as owisn wer &&&"`hello, someone`; // later

// //numbers
// 34;
// 35.7;
// 883 - 23;
// 0;
// NaN; //typeof number

// //boolean
// true;
// false;

//undefined
//like a question that has been asked but no answer or value is received.

//null
//like a question that has been asnwer in the negative

//Variable
//let (value changes)
let counter = 1;
let dessert = null;

let lucrative;
let lucrative2 = undefined;

//const (constant)  // Data Storage
const friend = "Sabina"; //string
const length = 34; //number
const isCold = false; //boolean

//typeof
console.log("counter:", counter);

console.log("dessert:", dessert);
console.log("typeof dessert:", typeof dessert);

console.log("lucrative, lucrative2", lucrative, lucrative2);

console.log("typeof friend", typeof friend);

console.log(typeof length);
console.log(typeof isCold);

//length
console.log("friend", friend);
console.log("typeof friend", typeof friend);
console.log("friend.length", friend.length); //

let user = "Jack";
console.log(user);
console.log(user.length);
console.log(typeof user);

let garden = 10;
console.log(garden);
console.log(typeof garden);

let watered = true;
console.log(typeof watered);

let tomato = null;
console.log(typeof tomato);

//Operators Arithmetic

// + - * / %  | +=, -=, *=, /=

//Addition +
let score = 12;
console.log("score", score);
score = score + 3; // 15
console.log("score", score); // 15
// =+
score += 3; // 18
console.log("score", score); // 18

// Concatenate strings
let firstName = "David";
let lastName = "Rogers";
let fullName = firstName + " " + lastName;
console.log("anythign>>>>>", fullName);

let rogerFriend = `${firstName} ${lastName}`;
console.log("rogerFriend", rogerFriend);

let newName = "Clarrisa" + " " + "Ray";
console.log("newName>>>>>", newName);

let combo = 10 + "name";
console.log("combo", combo);

let combo2 = "name" + 10;
console.log("combo2", combo2);

let firstnum = "10" + 20;
console.log("firstnum", firstnum);

let firstnum2 = 20 + "10"; //type coercion
console.log("firstnum2", firstnum2);

//String Literal
let friendName = `Clarrisa Ray`;
console.log("friendName", friendName);

//Subtraction -
let newNum = 9 - 3; //6
console.log("newNum", newNum);

// Multiplication *
let mult = 2 * 4;
console.log("mult", mult);
mult = mult * 2; // 16
console.log("mult", mult);

// Division /
let div = 22 / 2;
console.log("div", div);
div = div + 3; //14
// /=
div /= 2;
console.log("div", div); // 7

// Mudolo %
let moduloOp = 17 % 3; // if you take teh first number and divide by the second, when it evenly divides it is 0; if there is a remainder after the division, the %  returns the remainder.
console.log("moduloOp", moduloOp); // 2
moduloOp %= 2;
console.log("moduloOp", moduloOp); //0

// if(it is raining) {
//  no need ot water the tomtoes
// }

// if(it is raining) {
//  no need ot water the tomotoes
//  } else {
//   water the tomatoes
//  }

// if() {

// } else if() {

// } else if() {

// } else {

// }

// if(the operator is addition) {
//  add the numebrs ===
// } else if(the operator is subtraction) {
//  subtract the numbers
// } else if(operator is multiply) {
//  mult the nums
// } else {
//     divide the nums
// }

let operator = "divide";
let num1 = 20;
let num2 = 10;
let total = 0;

if (operator === "add") {
  total = num1 + num2;
  console.log("total", total);
}
if (operator === "subtract") {
  total = num1 - num2;
  console.log("total", total);
}
if (operator === "multiply") {
  total = num1 * num2;
  console.log("total", total);
} else if (operator === "divide") {
  total = num1 / num2;
  console.log("total", total);
}
