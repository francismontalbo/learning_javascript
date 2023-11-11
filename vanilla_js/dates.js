// Get the current date and time
const currentDate = new Date();
console.log("Current Date and Time:", currentDate);

// Creating a specific date
const specificDate = new Date("2023-11-08T12:00:00");
console.log("Specific Date:", specificDate);

// Get individual date components using get methods
const year = currentDate.getFullYear();
const month = currentDate.getMonth(); // 0-based, so January is 0
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

console.log(`Year: ${year}, Month: ${month + 1}, Day: ${day}, Time: ${hours}:${minutes}:${seconds}`);

// Formatting a date as a string using toLocaleString
const formattedDateTime = currentDate.toLocaleString("en-US");
console.log("Formatted Date and Time:", formattedDateTime);

// Formatting a date as a custom string
const formattedCustom = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ` +
  `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
console.log("Custom Formatted Date:", formattedCustom);

// Adding and subtracting time using set methods
const tomorrow = new Date(currentDate);
tomorrow.setDate(currentDate.getDate() + 1);
console.log("Tomorrow:", tomorrow);

const tenDaysAgo = new Date(currentDate);
tenDaysAgo.setDate(currentDate.getDate() - 10);
console.log("Ten Days Ago:", tenDaysAgo);

// Calculate the difference in days between two dates
const date1 = new Date("2023-11-10");
const date2 = new Date("2023-11-08");
if (date1 > date2) {
  console.log("date1 is later than date2");
} else if (date1 < date2) {
  console.log("date1 is earlier than date2");
} else {
  console.log("date1 and date2 are equal");
}

// Calculate the time difference between two dates
const timeDifference = date1.getTime() - date2.getTime(); // Difference in milliseconds
const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
console.log("Time Difference (in hours):", hoursDifference);

// Check if a year is a leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log("Is 2024 a leap year?", isLeapYear(2024));

// Format a timestamp into a readable date string
function formatTimestamp(timestamp) {
  const formattedDate = new Date(timestamp).toLocaleString("en-US");
  return formattedDate;
}

console.log("Formatted Timestamp:", formatTimestamp(Date.now()));

// Parsing dates from user input
function parseUserInput(userInput) {
  const parsedDate = new Date(userInput);
  if (!isNaN(parsedDate)) {
    return parsedDate;
  } else {
    return "Invalid date input";
  }
}

const userDateInput = "2023-12-01T14:30:00";
const parsedUserDate = parseUserInput(userDateInput);
console.log("Parsed User Date:", parsedUserDate);


