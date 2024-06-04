console.log("hello form session 4");

// for (start; end; step) {
//   //actions to transform your data inside the array
// }

// let fruits = ["Apple", "Banana", "Cherry", "Mango"];

// for (let index = 0; index < fruits.length; index++) {
//   console.log(
//     "index, fruits[index].toUpperCase()",
//     index,
//     fruits[index].toUpperCase()
//   ); //0 'apple'
//   //1 'banana'
//   //2 'cherry
//   //3
// }

// let nums = [1, 2, 3, 4, 5];

// for (let j = 0; j < nums.length; j++) {
//   nums[j] = nums[j] + 1;
// }
// console.log("nums", nums);

// let isCheckedOut = [true, false, true, false, true, false]; // [false, true]

// for (let s = 0; s < isCheckedOut.length; s++) {
//   isCheckedOut[s] = !isCheckedOut[s];
//   //   console.log("array inside", isCheckedOut);
// }

// console.log("array outisde", isCheckedOut);

let beverages = ["Coffee", "Tea", "Soda", "Water"];

//iterate over array to change all the beverages to good
for (let counter = 0; counter < beverages.length; counter++) {
  beverages[counter] = `${beverages[counter]} is good.`;
  console.log("inside", beverages);
}
console.log("outside", beverages);

//FOR IN LOOP //FOR EDU PURPOSES ONLY
let colors = ["Red", "Green", "Blue"];

for (let index in colors) {
  console.log(`Index: ${index}, Value: ${colors[index]}`);
}

//FOR OF LOOP
let myFruits = ["Apple", "Banana", "Cherry"];

for (let fruit of myFruits) {
  //myFruits[fruit]
  console.log(fruit);
}

let myBeverages = ["Coffee", "Tea", "Soda", "Water"];

//iterate over array to change all the myBeverages to good
for (let counter = 0; counter < myBeverages.length; counter++) {
  myBeverages[counter] = `${myBeverages[counter]} is good.`;
  console.log("inside", myBeverages);
}
console.log("outside", myBeverages);

for (let beverage of myBeverages) {
  beverage = `${beverage} is good`;
}
console.log("myBeverages", myBeverages);

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

//Write a function expression that takes in an array of numbers, iterate over the array of numbers, and for each number if it is even, print 'num is even.' If the num is odd , print 'num is odd to th econsole.

const nums = [1, 2, 3];
const nums2 = [4, 5, 6];
const nums3 = [345, 234, 7439207, 96472, 53245];

let evenOrOdd = function (numbers) {
  for (let n = 0; n < numbers.length; n++) {
    // if (numbers[n] % 2 === 0) {
    //   console.log("num is even");
    // } else if (numbers[n] % 2 !== 0) {
    //   console.log("num is odd");
    // }

    //ternary operator
    numbers[n] % 2 === 0
      ? console.log("num is even")
      : console.log("num is odd");
  }
};
// evenOrOdd(nums);
//"num is odd"
//num is even'
//"num is odd"

// evenOrOdd(nums2);
evenOrOdd(nums3);
