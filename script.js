/* Step 1 */
console.log("Hello, World!")

/* Step 2 */
const max = 3;
function getComputerChoice(max) {
    return Math.floor(Math.random() * max);
}

console.log(getComputerChoice(max))

/* Step 3 */
const humanChoice = prompt("What is your choice?")

if (humanChoice.toLowerCase() === "rock") {
    console.log("rock")
} else if (humanChoice.toLowerCase() === "paper") {
    console.log("paper")
} else if (humanChoice.toLowerCase() === "scissors") {
    console.log("scissors")
} else {
    console.log(NaN)
}

function getHumanChoice(humanChoice) {
    return humanChoice
}

console.log(humanChoice)

/* Step 4 */
const humanScore = 0;
const computerScore = 0;

/* Step 5 */
function playRound(humanChoice, computerScore) {
    // your code here!
}

const humanSelection = getHumanChoice()
const computerSelection = getSelectionChoice()

playRound(humanSelection, computerSelection);
