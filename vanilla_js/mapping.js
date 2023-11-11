// Mapping
const add = (a, b) => a + b;

const result = add(5, 3); // Call the add function with arguments 5 and 3
console.log(result); // Output: 8

const numbers = [1, 2, 3, 4, 5];

// Double each number in the array
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Convert an array of strings to uppercase
const fruits = ["apple", "banana", "cherry"];
const uppercaseFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(uppercaseFruits); // Output: ["APPLE", "BANANA", "CHERRY"]

