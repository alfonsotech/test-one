console.log("hello from the js file");

// 1. Destructuring Assignment with Objects
// Explanation: Destructuring assignment with objects allows you to unpack values from objects into distinct variables. Think of it as a way to "extract" properties from objects and assign them to variables in a single step.

const person = { firstName: "Alice", age: 30 };
const { firstName, age } = person;
console.log(firstName); // Output: Alice
console.log(age); // Output: 30

// Here, we extract the firstName and age properties from the person object into variables firstNamed firstName and age.

// 2. Destructuring Assignment with Arrays
// Explanation: Similar to object destructuring, array destructuring allows you to unpack values from arrays into separate variables. However, with arrays, the order of elements is used to decide which variable gets which value.

// const colors = ["red", "green", "blue"];
// const [firstColor, secondColor] = colors;
// console.log(firstColor); // Output: red
// console.log(secondColor); // Output: green

// Here, firstColor gets the first element of the colors array ('red'), and secondColor gets the second element ('green').

// 3. Destructuring from Return Values of Functions
// Explanation: You can also use destructuring to handle multiple return values from a function. This is handy when a function returns an array or an object, and you want to access specific values directly.

// function getScores() {
//   return [70, 80, 90];
// }

// const [math, science, english] = getScores();
// console.log(math); // Output: 70
// console.log(science); // Output: 80
// console.log(english); // Output: 90

// Here, the getScores function returns an array, and we directly unpack its values into math, science, and english variables.

// 4. Creating Shallow Copies of Arrays and Objects
// Explanation: Creating shallow copies means making a new array or object that contains the same elements or properties as the original but is a separate entity. Modifying the copy does not affect the original and vice versa. However, note that this "shallow" copy does not extend to nested objects or arrays; changes to nested objects in the copy will affect the original.

// const originalArray = [1, 2, 3];
// const shallowCopyArray = [...originalArray];
// shallowCopyArray.push(4);
// console.log(originalArray); // Output: [1, 2, 3]
// console.log(shallowCopyArray); // Output: [1, 2, 3, 4]

// Example with Object:

// const originalObject = { a: 1, b: 2 };
// const shallowCopyObject = { ...originalObject };
// shallowCopyObject.c = 3;
// console.log(originalObject); // Output: { a: 1, b: 2 }
// console.log(shallowCopyObject); // Output: { a: 1, b: 2, c: 3 }

// In these examples, the spread operator (...) is used to create shallow copies of the original array and object. Adding new elements or properties to the copies does not affect the originals.

// The Ternary Operator
// Explanation: The ternary operator is a shorthand way of doing a simple if-else statement. It takes three operands: a condition to check, the value to return if the condition is true, and the value to return if the condition is false. It's written like this: condition ? valueIfTrue : valueIfFalse.

// const age = 18;
// const canVote = age >= 18 ? "Yes" : "No";
// console.log(canVote); // Output: Yes

// Here, the ternary operator checks if age is greater than or equal to 18. If true, it sets canVote to 'Yes', otherwise to 'No'.

// Asynchronous Code Using Timeouts
// Explanation: JavaScript allows you to execute code asynchronously, which means you can schedule code to run after a certain time period without blocking the execution of other code. The setTimeout() function is commonly used for this purpose. It takes a callback function and a time delay (in milliseconds) as arguments. The callback function is executed once the time delay has passed.

// console.log("Start");
// setTimeout(() => {
//   console.log("This message is displayed after 2 seconds");
// }, 2000);
// console.log("End");

// In this example, 'Start' and 'End' are logged to the console immediately, while the message inside setTimeout() is displayed after a 2-second delay.

// Asynchronous Code Using Browser Events
// Explanation: Browser events are actions that occur as a result of the user's interaction with the browser's window or the document's content. JavaScript can listen to these events (like clicks, mouse movements, keypresses) and execute code in response, allowing for asynchronous behavior. This is done using event listeners.

//<button id="clickMeButton">Click Me</button>;

// document.getElementById("clickMeButton").addEventListener("click", function () {
//   console.log("Button was clicked!");
// });

// In this HTML and JavaScript example, an event listener is added to a button with the ID clickMeButton. When the button is clicked, the callback function is executed, logging 'Button was clicked!' to the console. This code runs asynchronously, meaning it will only execute in response to the click event and does not block other JavaScript from running.

// Understanding these concepts allows you to write more flexible and efficient JavaScript code. The ternary operator simplifies conditional expressions, while asynchronous programming with timeouts and event listeners enables your code to respond to user actions and time-based events without freezing your web application.
