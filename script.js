// DOM elements - connect to your HTML
const resultDiv = document.querySelector('.message');
const humanScoreEl = document.querySelector('.scoreHuman');
const computerScoreEl = document.querySelector('.scoreComputer');
const buttons = document.querySelectorAll('.choiceHuman button');

// Game state
let humanScore = 0;
let computerScore = 0;

// Helper: computer makes random choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Core logic - one round
function playRound(humanChoice, computerChoice) {
    // Normalize (just in case)
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    // Show what was played (nice feedback)
    resultDiv.textContent = `You chose ${humanChoice} - Computer chose ${computerChoice}.`;

    if (humanChoice === computerChoice) {
        resultDiv.textContent += "It's a tie!";
        return;
    }

    let winnerMessage;
    let winner = null;

    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'scissors')
    ) {
        humanScore++;
        winner = 'human';
        winnerMessage = `${humanChoice} beats ${computerChoice}. You win this round!`;
    } else {
        computerScore++;
        winner = 'computer';
        winnerMessage = `${computerChoice} beats ${humanChoice}. Computer wins this round!`;
    }

    resultDiv.textContent += winnerMessage;

    // Update visible scores
    humanScoreEl.textContent = humanScore;
    computerScoreEl.textContent = computerScore;

    // Check for game end
    if (humanScore >= 5 || computerScore >= 5) {
        endGame();
    }
}

// Game over logic
function endGame() {
    let finalMessage;
    if (humanScore > computerScore) {
        finalMessage = "Game Over - You win the match!";
    } else if (computerScore > humanScore) {
        finalMessage = "Game Over - Computer wins the match!";
    } else {
        finalMessage = "Game Over - It's a tie!"
    }
    resultDiv.textContent = finalMessage;

    // Disable all buttons to prevent more plays
    buttons.forEach(button => {
        button.disabled = true;
        button.style.opacity = '0.6';
        button.style.cursor = 'not-allowed';
    });
}

// Attach click listeners to the three buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const humanChoice = button.dataset.choice || button.className;
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    });
});