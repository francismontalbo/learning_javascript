// Filtering 

// Filter even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Filter fruits with names containing 'a'
const fruits = ["apple", "banana", "cherry"];
const fruitsWithA = fruits.filter((fruit) => fruit.includes("a"));
console.log(fruitsWithA); // Output: ["apple", "banana"]

