// For-loop in JavaScripts

for (let i = 1; i <=5; i++) {
    console.log(i)
}

const userChoices = ["rock", "paper", "scissors"];
const rounds = 3;

for (let i=1; i<= rounds; i++) {
    const userChoice = userChoices[Math.floor(Math.random() * userChoices.length)];
    const computerChoice = userChoices[Math.floor(Math.random() * userChoices.length)];

    let result;

    if (userChoice === computerChoice) {
        result = "Its a tie!"
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You are the winner!";
} else {
    result = "You lose!";

}
    console.log(`Round ${i}: You chose ${userChoice} and your oppent chose ${computerChoice}: ${result}`)
}


let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;
}

console.log(numbers);

let cats = ['Tom', 'Mike', 'Wiz'];

for (let i=0; i < cats.length; i++) {
    cats[i] = cats[i] + " " + "Cat";
}

console.log(cats);