// Reduce

const numbers = [1, 2, 3, 4, 5];

// Sum all numbers in the array
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Output: 15

// Calculate the product of all numbers in the array
const product = numbers.reduce((accumulator, current) => accumulator * current, 1);
console.log(product); // Output: 120
