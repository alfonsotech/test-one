// 1. Creating an Object and Accessing Properties
// Create an object called dog with the following properties: name, age, and isNeutered. Use dot notation to access and log the values of these properties to the console.

const dog = {
  name: "Buddy",
  age: 2,
  isNeutered: true,
};

console.log(dog.name, dog.age, dog.isNeutered);

// 2. Method and this Keyword
// Create an object called car with the following properties: make, model, and year. Add a method called displayInfo that logs a string containing the car's make, model, and year using the this keyword.

// const car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2020,

//   //TODO: create a method
//   displayInfo: function () {
//     console.log(`${this.make},
//       ${this.model},
//       ${this.year} `);
//   },
// };
// car.displayInfo();

// 3. Nested Objects and Dot Notation
// Create an object called student with the following properties: name, age, and address. The address property should be another object with properties street, city, and country. Use dot notation to access and log the values of the nested properties to the console.

const student = {
  name: "Emily Johnson",
  age: 22,
  //  TODO: Create the address object here
  address: {
    street: "123 main",
    city: "pine",
  },
};
console.log(`${student.address.street},  ${student.address.city}`);

// Using Object.keys()
// Create an object called person with properties name, age, and city. Use Object.keys() to get an array of the object's property names, and then iterate over the array using a for...of loop to log each property name to the console.

const person = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

const myPersonProperties = Object.keys(person);
console.log("myPersonProperties>>>>>>>>", myPersonProperties);

for (let i = 0; i < myPersonProperties.length; i++) {
  console.log(myPersonProperties[i]);
}

// Using Object.values()
// Create an object called car with properties make, model, and year. Use Object.values() to get an array of the object's property values, and then iterate over the array using a for...of loop to log each value to the console.

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
};

const myCarValues = Object.values(car);
console.log(myCarValues);

// Iterating with for...in
// Create an object called newStudent with properties name, age, and grades (an array of numbers). Use a for...in loop to iterate over the object's properties, and log the property name and value to the console.

const newStudent = {
  grades: [85, 92, 78, 91],
};

for (key in newStudent) {
  // console.log(key, newStudent[key][0]);
  // console.log(key, newStudent[key][1]);
  // console.log(key, newStudent[key][2]);
  for (let i = 0; i < newStudent[key].length; i++) {
    console.log(newStudent[key][i]);
  }
}

// Iterating with
// Create an object called book with properties title, author, and year. Use Object.entries() to get an array of the object's key-value pairs, and then iterate over the array using a for...of loop to log each key-value pair to the console.

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};

// console.log(Object.entries(book));
