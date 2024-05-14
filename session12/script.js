const person = {
  name: "John Doe",
  age: 30,
  isStudent: false,
  addresses: [
    {
      type: "home",
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipCode: "12345",
    },
    {
      type: "work",
      street: "456 Second St",
      city: "Worktown",
      state: "CA",
      zipCode: "67890",
    },
  ],
  phoneNumbers: ["123-456-7890", "987-654-3210"],
};

// class Person {
//   constructor(name, age, isStudent, addresses, phoneNumbers) {
//     this.name = name;
//     this.age = age;
//     this.isStudent = isStudent;
//     this.addresses = addresses;
//     this.phoneNumbers = phoneNumbers;
//   }
// }

// class Person {
//   constructor(name, age, isStudent, addresses, phoneNumbers) {
//     this.name = name;
//     this.age = age;
//     this.isStudent = isStudent;
//     this.addresses = addresses;
//     this.phoneNumbers = phoneNumbers;
//   }

//   describe() {
//     const addressDescriptions = this.addresses
//       .map(
//         (address) =>
//           `${address.type} address: ${address.street}, ${address.city}, ${address.state} ${address.zipCode}`
//       )
//       .join("\n");

//     const phoneDescription = this.phoneNumbers.join(", ");

//     return `${this.name} is ${this.age} years old. ${
//       this.isStudent ? "Is a student." : "Is not a student."
//     }
// Addresses:
// ${addressDescriptions}
// Phone Numbers: ${phoneDescription}`;
//   }
// }
