// Problem 1: Grade Calculator

// Write a JavaScript program that calculates the grade for a student based on their score. The program should take the student's score as input and output the corresponding grade according to the following criteria:

// If the score is greater than or equal to 90, the grade is "A".
// If the score is between 80 and 89 (inclusive), the grade is "B".
// If the score is between 70 and 79 (inclusive), the grade is "C".
// If the score is between 60 and 69 (inclusive), the grade is "D".
// If the score is less than 60, the grade is "F".

// write a function that takes in  a number
// create a if else structure for the grading
// the function will out put the final grade

function score(final) {
  if (final >= 90) {
    return "A";
  } else if (final >= 80 && final <= 89) {
    return "B";
  } else if (final >= 70 && final <= 79) {
    return "C";
  } else if (final >= 60 && final <= 69) {
    return "D";
  } else {
    return "F";
  }
}

// console.log(score(94));
// console.log(score(84));
// console.log(score(74));
// console.log(score(64));
// console.log(score(54));

// Problem 2: Vowel Counter

// Write a JavaScript program that takes a string as input and counts the number of vowels (a, e, i, o, u) in the string. The program should have the following features:

// A function that takes a string as an argument and returns the count of vowels in the string.
// Use an array to store the vowels and loop through the string to count the occurrences of each vowel.
// Implement the function using both function declaration and arrow function syntax.
// Use conditional statements (if, else if, else) to handle different cases, such as an empty string or a string with no vowels.
// Use array methods like push(), pop(), shift(), unshift(), slice(), splice(), and indexOf() to manipulate the array of vowels.

// write a function called vowelCounter that takes a string
// create a empty array to store any vowel we incounter
// write a for loop to indurate over the string
// check in the array if its a vowel,
// push into vowel array
// return the length of that vowels array

// let string = "hallo world";
function vowelCounter(string) {
  const vowels = [];
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "A" ||
      string[i] === "E" ||
      string[i] === "I" ||
      string[i] === "O" ||
      string[i] === "U" ||
      string[i] === "a" ||
      string[i] === "e" ||
      string[i] === "i" ||
      string[i] === "o" ||
      string[i] === "u"
    ) {
      //forloop to iterate over the vowels array, if it isn't in the array, then push
      vowels.push(string[i]);
    }
  }
  console.log(vowels);
  return vowels.length;
}
console.log(vowelCounter("Hello everyone im here"));
console.log(
  vowelCounter(
    "a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses."
  )
);
console.log(
  vowelCounter(
    'In linguistics and grammar, a sentence is a linguistic expression, such as the English example "The quick brown fox jumps over the lazy dog." In traditional grammar, it is typically defined as a string of words that expresses a complete thought, or as a unit consisting of a subject and predicate. Wikipedia'
  )
);
