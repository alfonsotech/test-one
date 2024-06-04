// console.log("hello from session 3");

// //Coming up next: Arrays, Simple Array Methods, For-Loop, media queries

// let numsArray = [1, 2, 3, 4]; //length 4

// // Bracket Notation - get, set
// console.log("numsArray[0]:", numsArray[0]);
// console.log("numsArray[1]:", numsArray[1]);
// console.log("numsArray[2]:", numsArray[2]);
// console.log("numsArray[3]:", numsArray[3]);

// numsArray[4] = 5;
// console.log("numsArray", numsArray); // [1,2,3,4,5, 6]

// //[1, 2, 3, 4, 5, 6];
// numsArray[5] = 66;
// console.log("numsArray", numsArray); //[1,2,3,4,5,66 ]

// numsArray[0] = 78;
// console.log("numsArray", numsArray);

// numsArray[8] = "apple";
// console.log("numsArray", numsArray);
// console.log("numsArray[6]", numsArray[6]);

// console.log("numsArray.length", numsArray.length);

// let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// console.log("fruits", fruits[2]);
// fruits[fruits.length] = "Orange";

// fruits[fruits.length] = "Blood Orange";
// console.log("fruits", fruits);

// //SImple Array Methods: pop, push, shift, unshift, indexOf

// let lastItem = fruits.pop(); //destrutive method
// console.log("lastItem", lastItem);
// console.log("fruits", fruits);

// fruits.push("avocato"); // desctructive
// console.log("fruits", fruits);

// console.log(typeof fruits[5]); //typeof

// let eArray = [
//   "Innovation",
//   500000,
//   "The only way to do great work is to love what you do. - Steve Jobs",
//   42,
//   "Resilience",
// ];

// let end = eArray.pop();
// console.log("end", end);

// console.log(eArray);

// eArray.push(true);
// console.log("eArray", eArray);

// console.log("eArray", eArray.pop());
// console.log(eArray.pop());
// console.log(eArray.pop());

// console.log("eArray", eArray);

// console.log(eArray.push("iphone"));
// console.log("eArray", eArray);

// console.log(eArray.shift());
// console.log(eArray);

// eArray.unshift(false);
// console.log(eArray);

// console.log(eArray.shift());
// console.log(eArray.unshift("ipad"));
// console.log("eArray", eArray);
// eArray[1] = true;
// console.log(eArray);

//slice and splice
let fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
];
let selectedFruits = fruits.slice(2, 5);
console.log(selectedFruits);

console.log("fruits", fruits);

selectedFruits = fruits.slice(4, 6);
console.log(selectedFruits);
console.log(fruits);

fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

let removedFruits = fruits.splice(2, 2);
console.log(removedFruits); //
console.log(fruits);

fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

let removedFruits2 = fruits.splice(2, 3);
console.log(removedFruits2); //
console.log(fruits);

fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

let removedFruits3 = fruits.splice(2, 3, true, 42);
console.log(removedFruits3); //
console.log(fruits);

let removedFruits4 = fruits.splice(1, 3, false, null);
console.log(removedFruits4);
console.log(fruits);

fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];
fruits.slice();
console.log(fruits.slice());

let myIndex = fruits.indexOf("Banana");
console.log("myIndex", myIndex); //1
