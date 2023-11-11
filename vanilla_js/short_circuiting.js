// Example 1: Logical AND (&&)
let x = 5;
let y = 10;
let resultAnd = x > 0 && y / x > 2;
console.log("Example 1:", resultAnd); // true

// Example 2: Logical OR (||)
function greet(name) {
    name = name || "Guest";
    console.log("Example 2: Hello, " + name + "!");
}

greet();          // Hello, Guest!
greet("John");    // Hello, John!

// Example 3: Using Short-Circuiting for Default Values
let username = getUserInput() || "Guest";
console.log("Example 3:", username);

// Example 4: Conditional Execution
let isLoggedIn = true;
isLoggedIn && console.log("Example 4: User is logged in");

// Example 5: Avoiding Errors with Short-Circuiting
let data = { user: { name: "John" } };
let userName = data.user && data.user.name;
console.log("Example 5:", userName); // "John"

// Function to simulate getUserInput()
function getUserInput() {
    // Simulating no user input
    return null;
}
