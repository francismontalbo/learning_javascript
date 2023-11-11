// Functions in JavaScript

// JavaScript Functions

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!

// Function Expression:
const add = function (a, b) {
    return a + b;
};

console.log(add(5, 3)); // Output: 8

// Arrow Function:
const square = (num) => num * num;

console.log(square(4)); // Output: 16

// Function Constructor (Rarely used, not recommended)
const multiply = new Function('a', 'b', 'return a * b');

console.log(multiply(6, 7)); // Output: 42

// Immediately Invoked Function Expression (IIFE)
(function () {
    const secretNumber = Math.random();
    console.log(`Random secret number: ${secretNumber}`);
})();   // The secretNumber variable is not accessible outside the IIFE.

// Named Function Expression
const factorial = function calculateFactorial(num) {
    if (num <= 1) return 1;
    return num * calculateFactorial(num - 1);
};

console.log(factorial(5)); // Output: 120

// Additional Examples:

// Example 1: Filter even numbers from an array
function filterEvenNumbers(nums) {
    const evenNumbers = nums.filter(num => num % 2 === 0);
    return evenNumbers;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: [2, 4, 6, 8, 10]

// Example 2: Calculate the sum of an array
function sumArray(nums) {
    const sum = nums.reduce((total, num) => total + num, 0);
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// Example 3: Find the maximum value in an array
function findMaxValue(nums) {
    const max = Math.max(...nums);
    return max;
}

console.log(findMaxValue([5, 10, 2, 8, 15])); // Output: 15

// Example 4: Convert a string to lowercase
function toLowerCase(str) {
    return str.toLowerCase();
}

console.log(toLowerCase("Hello World")); // Output: "hello world"



// JavaScript Functions with Conditions, Loops, and Arrays

// Function Declaration
function findEvenNumbers(nums) {
    const evenNumbers = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            evenNumbers.push(nums[i]);
        }
    }
    return evenNumbers;
}

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: [2, 4, 6, 8, 10]

// Function Expression
const findOddNumbers = function (nums) {
    const oddNumbers = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 1) {
            oddNumbers.push(nums[i]);
        }
    }
    return oddNumbers;
};

console.log(findOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: [1, 3, 5, 7, 9]

// Arrow Function
const findSquares = (nums) => {
    const squares = [];
    for (let num of nums) {
        squares.push(num * num);
    }
    return squares;
};

console.log(findSquares([1, 2, 3, 4, 5])); // Output: [1, 4, 9, 16, 25]

// Function Constructor (Not recommended)
const findPrimes = new Function('nums', `
    const primes = [];
    for (let num of nums) {
        let isPrime = true;
        if (num <= 1) {
            isPrime = false;
        } else {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
            primes.push(num);
        }
    }
    return primes;
`);

console.log(findPrimes([2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: [2, 3, 5, 7]

// Immediately Invoked Function Expression (IIFE)
(function () {
    const fruits = ['apple', 'banana', 'cherry'];
    for (let i = 0; i < fruits.length; i++) {
        console.log(`I love ${fruits[i]}!`);
    }
})();

// Named Function Expression
const findPositiveNumbers = function findPositives(nums) {
    const positives = [];
    for (let num of nums) {
        if (num > 0) {
            positives.push(num);
        }
    }
    return positives;
};

console.log(findPositiveNumbers([-2, 0, 5, -7, 8])); // Output: [5, 8]









