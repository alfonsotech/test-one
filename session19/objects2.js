// 1. Creating an Object and Accessing Properties
// Create an object called dog with the following properties: name, age, and isNeutered. Use dot notation to access and log the values of these properties to the console.

// 2. Method and this Keyword
// Create an object called car with the following properties: make, model, and year. Add a method called displayInfo that logs a string containing the car's make, model, and year using the this keyword.

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,

  //TODO: create a method
};

// 3. Nested Objects and Dot Notation
// Create an object called student with the following properties: name, age, and address. The address property should be another object with properties street, city, and country. Use dot notation to access and log the values of the nested properties to the console.

const student = {
  name: "Emily Johnson",
  age: 22,
  //  TODO: Create the address object here
};

// Using Object.keys()
// Create an object called person with properties name, age, and city. Use Object.keys() to get an array of the object's property names, and then iterate over the array using a for...of loop to log each property name to the console.

const person = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

// Using Object.values()
// Create an object called car with properties make, model, and year. Use Object.values() to get an array of the object's property values, and then iterate over the array using a for...of loop to log each value to the console.

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
};

// Iterating with for...in
// Create an object called newStudent with properties name, age, and grades (an array of numbers). Use a for...in loop to iterate over the object's properties, and log the property name and value to the console.

const newStudent = {
  name: "Emily Johnson",
  age: 22,
  grades: [85, 92, 78, 91],
};

// Iterating with Object.entries()
// Create an object called book with properties title, author, and year. Use Object.entries() to get an array of the object's key-value pairs, and then iterate over the array using a for...of loop to log each key-value pair to the console.

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};
