// Problem3 : Book Management System

// Create a JavaScript program that simulates a simple book management system. The program should have the following features:

// Define an object called book with properties such as title, author, pages, and isAvailable (a boolean indicating whether the book is available or not).

// Use dot notation to access and modify the properties of the book object.
// Create a getter method to retrieve the book's availability status.
// Create a setter method to update the book's availability status.
// Create a method to calculate the estimated reading time based on the number of pages (assume an average reading speed of 30 pages per hour).
// Create a function that takes a book object as an argument and updates its properties (e.g., change the author's name, increase the number of pages).
// Demonstrate the concept of passing immutable values (e.g., numbers, strings, booleans) by value and mutable values (e.g., objects, arrays) by reference.

// class Person {
//   constructor(name, age, isStudent, addresses, phoneNumbers) {
//     this.name = name;
//     this.age = age;
//     this.isStudent = isStudent;
//     this.addresses = addresses;
//     this.phoneNumbers = phoneNumbers;
//   }
// }

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age() {
//     const date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }

class Book {
  constructor(title, author, pages, isAvailable) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = isAvailable;
  }

  getAvailability() {
    return this.isAvailable;
  }

  changeAvailability() {
    if (this.isAvailable) {
      this.isAvailable = false;
    } else {
      this.isAvailable = true;
    }
  }

  // Create a method to calculate the estimated reading time based on the number of pages (assume an average reading speed of 30 pages per hour).

  readTime() {
    let pageTime = this.pages / 30;
    return pageTime;
  }
}

const firstBook = new Book("Cat In The Hat", "Dr,Sesus", 244, true);
console.log(firstBook.readTime());

// console.log(firstBook);

// console.log("firstBook.title", firstBook.title);

// console.log("firstBook.changeAvailability()", firstBook.changeAvailability());

// console.log("firstBook.isAvailable", firstBook.isAvailable);

// console.log("firstBook.changeAvailability()", firstBook.changeAvailability());

// console.log("firstBook.isAvailable", firstBook.isAvailable);
