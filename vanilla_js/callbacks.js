function greet(name, callback, delay) {
    setTimeout(function() {
      callback("Hello, " + name);
    }, delay);
  }
  
  function displayGreeting(message) {
    console.log(message);
  }
  
  greet("John", displayGreeting, 1000);


const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function(number) {
    return number * number;
  });

console.log(squaredNumbers);