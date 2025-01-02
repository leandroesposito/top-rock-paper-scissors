function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choiceNumber = Math.floor(Math.random() * choices.length)
    let choice = choices[choiceNumber];

    return choice;
}

function getHumanChoice() {
    let isValidChoice = false;
    let choice = null;
    while (!isValidChoice) {
        choice = prompt('Write your choice between "rock", "paper" and "scissors".');
        if (choice) {
            choice = choice.trim().toLowerCase();
            isValidChoice = choice === "rock" || choice === "paper" || choice === "scissors";
        }
    }

    return choice;
}


function generateResult(humanChoice, computerChoice) {
    let message = "";

    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            message = "Draw, both chose Rock.";
        }
        else if (computerChoice === "paper") {
            message = "You lose! Paper beats Rock";
            computerScore++;
        }
        else if (computerChoice === "scissors") {
            message = "You win! Rock beats Scissors";
            humanScore++;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            message = "You win! Paper beats Rock";
            humanScore++;
        }
        else if (computerChoice === "paper") {
            message = "Draw, both chose Paper.";
        }
        else if (computerChoice === "scissors") {
            message = "You lose! Scissors beats Paper";
            computerScore++;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            message = "You lose! Rock beats Scissors";
            computerScore++;
        }
        else if (computerChoice === "paper") {
            message = "You win! Scissors beats Paper";
            humanScore++;
        }
        else if (computerChoice === "scissors") {
            message = "Draw, both chose Scissors.";
        }
    }

    return message;
}

function showResults(humanScore, computerScore) {
    console.log(`Results | You: ${humanScore} | Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win!");
    }
    else if (humanScore < computerScore) {
        console.log("You lose!");
    }
    else {
        console.log("Draw");
    }
}

let humanScore = 0;
let computerScore = 0;

const elementsContainer = document.querySelector(".elements-container");

elementsContainer.addEventListener("click", (event) => {
    if (event.target.id === "") {
        return;
    }

    playRound(event.target.id);
});

function playRound(humanChoice) {
    let matchResult = generateResult(humanChoice, getComputerChoice());
    showResult(matchResult);
    addResultToHistory(matchResult);
    showScores();
}

function showResult(matchResult) {
    const currentMatchResultContainer = document.querySelector(".current-match-result-container");

    currentMatchResultContainer.textContent = matchResult;
}

function addResultToHistory(matchResult) {
    const matchesHistoryContainer = document.querySelector(".matches-history-container");

    const newResultDiv = document.createElement("div");
    newResultDiv.textContent = matchResult;

    matchesHistoryContainer.insertBefore(newResultDiv, matchesHistoryContainer.children[0]);
}

function showScores() {
    const scoresContainer = document.querySelector(".scores-container");

    scoresContainer.textContent = `You: ${humanScore} | Computer ${computerScore}`;
}


/*
TODO

announce a winner of the game once one player reaches 5 points.

You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.
*/