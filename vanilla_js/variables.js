// const should not be changed
// const are preferred if creating arrays and objects
// use const as much as possible, else use let
// hoisting is no longer needed for let and const
// hositing is also not a practice anymore in modern web dev or javascript

var x;
let y;

x = 5;
y = 6;

// Operators

let z = x + y;

console.log(`This is the value of x: ${x}`);
console.log(`This is the value of y: ${y}`);
console.log(`This is the value of z: ${z}`);

const fname = "Francis";
const lname = "Montalbo";
const fullName = fname + " " + lname;

console.log(fullName);

const fullName2 = `${fname} ${lname}`;

console.log(fullName2);

console.log(`Printing from fullName: ${fullName}`);
console.log(`Printing from fullName2: ${fullName2}`);

function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(3, 5))

function divide(num1, num2) {
    return `${num1} divided by ${num2} is equal to ${num1 / num2}`;
}

console.log(divide(10, 2));

let zz = myFunction(3, 3);
function myFunction(a, b) {
    return a + b;
}

console.log(zz);
