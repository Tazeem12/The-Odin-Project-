const prompt = require('prompt-sync')();

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let input = prompt("Enter your choice (rock/paper/scissors): ");
    if (input == "rock" || input == "paper" || input == "scissors") {
        return input;
    } else {
        console.log("Please enter a valid choice: rock, paper, scissors.");
        return getHumanChoice(); // Ask again if invalid
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerSelection, humanSelection) {
    console.log(`You chose: ${humanSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    
    if (computerSelection == humanSelection) {
        console.log("It's a Tie!");
        return;
    }
    
    // Fix: Check if HUMAN wins these combinations
    if ((humanSelection == "rock" && computerSelection == "scissors") ||
        (humanSelection == "paper" && computerSelection == "rock") ||
        (humanSelection == "scissors" && computerSelection == "paper")) {
        humanScore++;
        console.log("You Win this round!");
    } else {
        computerScore++;
        console.log("You Lose this round!");
    }
}

function playGame() {
    console.log("=== Rock Paper Scissors - Best of 5 ===\n");
    
    for (let i = 1; i <= 5; i++) {
        console.log(`\n--- Round ${i} ---`);
        let humanInput = getHumanChoice();
        let computerInput = getComputerChoice();
        playRound(computerInput, humanInput);
        console.log(`Score - You: ${humanScore} | Computer: ${computerScore}`);
    }
    
    console.log("\n=== FINAL RESULTS ===");
    console.log(`Your Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log("🎉 YOU WIN THE GAME! 🎉");
    } else if (computerScore > humanScore) {
        console.log("💔 COMPUTER WINS THE GAME!");
    } else {
        console.log("🤝 IT'S A TIE GAME!");
    }
}

// Start the game
playGame() 