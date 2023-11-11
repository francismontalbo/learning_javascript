// Switch-Case in JavaScript

const userChoice = "paper";
const computerChoice = "rock";

switch (userChoice) {
    case computerChoice:
        console.log("Its a draw!");
        break;
    case "rock":
    case "paper":
    case "scissors":
        if ((userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")) {
            console.log("You win!");
            } else {
                console.log("You lose!")
            }
            break;
        default:
            console.log("Invalid choice!")

}

switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("May pasok today! :(");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Walang pasok! Enjoy!");
        break;
    default:
        console.log("Walang ganyang araw")
}

if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
    console.log("May pasok today! :(");
} else if (day === "Saturday" || day === "Sunday") {
    console.log("Walang pasok! Enjoy!");
} else {
    console.log("Walang ganyang araw")
}
