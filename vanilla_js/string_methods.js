// String Methods
const firstName = "John";
const lastName = "Doe";
const fullName = firstName.concat(" ", lastName);
console.log(fullName); // "John Doe"

const msg = "Hello, World!";
console.log(msg.toUpperCase()); // "HELLO, WORLD!"
console.log(msg.toLowerCase()); // "hello, world!"

const sentence = "This is a sample sentence.";
console.log(sentence.indexOf("is")); // 2
console.log(sentence.lastIndexOf("is")); // 5

const email = "user@example.com";
console.log(email.startsWith("user")); // true
console.log(email.endsWith(".com")); // true
console.log(email.startsWith("admin"));
console.log(email.endsWith(".net"));


















let text = "SliceMeOff";
let part = text.slice(7);

console.log(text);
console.log(part);

let text2 = "SliceMeOff";
let part2 = text2.slice(-3);

console.log(text2);
console.log(part2);

let text3 = "SliceMeOff";
let part3 = text3.slice(-10, -5);

console.log(text3);
console.log(part3);
