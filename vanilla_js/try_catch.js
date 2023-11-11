function divideNumbers(a, b) {
    try {
      if (b === 0) {
        // Attempting to divide by zero, which will throw an error
        throw new Error("Division by zero is not allowed.");
      }
      
      // If b is not zero, perform the division
      return a / b;
    } catch (error) {
      // Catch and handle the error
      console.error('An error occurred: ' + error.message);
      return null; // Return a default value or error indicator
    }
  }
  
  // Example usages:
  console.log(divideNumbers(10, 2)); // Output: 5
  console.log(divideNumbers(5, 0));  // Output: An error occurred: Division by zero is not allowed. null
  
  