// if-else if-else  in Javascript

const userChoice = "paper";
const computerChoice = "rock";

if (userChoice === computerChoice) {
    console.log("Its a draw!");
} else if (userChoice === "rock" && computerChoice ==="scissors" || 
userChoice === "paper" && computerChoice ==="rock" || 
userChoice === "scissors" && computerChoice ==="paper") {
    console.log("You are the victor!");
} else {
    console.log("You lose!")
}

