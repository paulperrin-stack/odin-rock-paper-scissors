/* Step 1 */
console.log("Hello, World!")

/* Step 2 */
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

/* Step 3 */
function getHumanChoice() {
    return prompt("rock, paper or scissors");
}

/* Step 4 */
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    /* Step 5 — playRound must be INSIDE playGame so it can access the scores */
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("Tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }


    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore) {
        console.log("You win the game!")
    } else if (computerScore > humanScore) {
        console.log("You lose the game!")
    } else {
        console.log("It's a tie!")
    }
}

playGame()