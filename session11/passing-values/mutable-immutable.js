//Mutable and immutable values

//Passing value by reference vs. by value
let myNumber = "hello";
function addTen(myNumber) {
  myNumber += " world"; // This modification does not affect the original variable
  console.log(`Inside function: ${myNumber}`); //22
}
addTen(myNumber);
console.log(" myNumber", myNumber); //12

//Passing by Reference
function updateProfile(profile) {
  profile.age = 30; // This modification affects the original object
  console.log(`Inside function: ${profile.age}`); //30
}

const myProfile = { name: "John", age: 25 };
updateProfile(myProfile);
console.log(`Outside function: ${myProfile.age}`); //30

// let myNumber = 5;
// addTen(myNumber);
// console.log(`Outside function: ${myNumber}`);

//Destructuring Assignment with Objects
const person = { name: "John Doe", age: 30 };
const { name, age } = person;

console.log(name); // 'John Doe'
console.log(age); // 30

//Destructuring Assignment with Arrays
const colors = ["red", "green", "blue"];
const [apple, orange, last] = colors;

console.log(apple); // 'red'
console.log(last); // 'green'

//The Ternary Operator
// if (10 < 20) {
//   console.log("10 is less than 20");
// } else {
//   console.log("10 is more than 20");
// }

// 10 < 20 ? "10 is less than 20" : "10 is more than 20";

// const age = 14;
// const canDrive = age >= 16 ? "Yes" : "No";

// console.log(canDrive); // 'Yes'

//Asynchronous Code
// console.log("Start");

// setTimeout(() => {
//   console.log("This is asynchronous");
// }, 2000);

// console.log("End");

//Asynchronous Code Using Browser Events
// document.getElementById("myButton").addEventListener("click", () => {
//   console.log("Button clicked!");
// });
