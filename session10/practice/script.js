// Write a function greet that takes a name as an argument and logs a greeting. If no name is passed, it should greet with "Hello, Guest!".
function greet(name) {
  if (typeof name === "string") {
    return `Hello ${name}`;
    //    console.log(`Hello ${name}`);
  } else {
    return `Hello Guest`;
  }
}

console.log(greet()); //
console.log(greet("Bob"));

//Given an array of numbers, write a function manipulateArray that uses array methods to do the following: remove the first element, add two numbers at the end, and then return the array.

//FUnction Declaration
// function manipulateArray(array) {
//   array.shift();
//   //   console.log(array);
//   array.push(6);
//   array.push(7);
//   //   console.log(array);
//   return array;
// }

//Function Expression
const manipulateArray = function (array) {
  array.shift();
  //   console.log(array);
  array.push(6);
  array.push(7);
  //   console.log(array);
  return array;
};
console.log(manipulateArray([1, 2, 3, 4, 5]));
console.log(manipulateArray([83, 45, 73, -26]));

//Create a function findAndReplace that takes an array and two values: findVal and replaceVal. The function should replace all occurrences of findVal in the array with replaceVal and return the new array.

//Write a for loop that iterates over an array of your favorite foods and logs each food item with a message saying "I love [food item]".
