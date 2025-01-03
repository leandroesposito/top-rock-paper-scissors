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

const currentMatchResultContainer = document.querySelector(".current-match-result-container");
const matchesHistoryContainer = document.querySelector(".matches-history-container");
const scoresContainer = document.querySelector(".scores-container");
const winnerAnnounceContainer = document.querySelector(".winner-announce-container");
const elementsContainer = document.querySelector(".elements-container");

elementsContainer.addEventListener("click", (event) => {
    if (event.target.id === "") {
        return;
    }

    playRound(event.target.id);
});

function playRound(humanChoice) {
    if (humanScore === 5 || computerScore === 5) {
        resetGame();
    }

    let matchResult = generateResult(humanChoice, getComputerChoice());
    showResult(matchResult);
    addResultToHistory(matchResult);
    showScores();

    if (humanScore === 5) {
        annouceWinner("You");
    }
    else if (computerScore === 5) {
        annouceWinner("Computer");
    }
}

function showResult(matchResult) {
    currentMatchResultContainer.textContent = matchResult;

    clearClassesExceptOriginal(currentMatchResultContainer);

    const resultClass = getUserResultClass(matchResult);
    currentMatchResultContainer.classList.add(resultClass);
}

function addResultToHistory(matchResult) {
    const newResultDiv = document.createElement("div");
    newResultDiv.textContent = matchResult;

    const resultClass = getUserResultClass(matchResult);
    newResultDiv.classList.add(resultClass);

    matchesHistoryContainer.insertBefore(newResultDiv, matchesHistoryContainer.children[0]);
}

function showScores() {
    scoresContainer.textContent = `You: ${humanScore} | Computer ${computerScore}`;

    clearClassesExceptOriginal(scoresContainer);
    scoresContainer.classList.add(getUserScoreClass());
}

function annouceWinner(winner) {
    winnerAnnounceContainer.textContent = `${winner}'ve won the game by reaching 5 points`;

    clearClassesExceptOriginal(winnerAnnounceContainer);
    winnerAnnounceContainer.classList.add(getUserScoreClass());
}

function clearClassesExceptOriginal(element) {
    const originalClass = element.classList[0];
    element.className = '';
    element.classList.add(originalClass);
}

function resetGame() {
    currentMatchResultContainer.textContent = "";
    matchesHistoryContainer.textContent = "";
    scoresContainer.textContent = "";
    winnerAnnounceContainer.textContent = "";

    humanScore = 0;
    computerScore = 0;
}

function getUserResultClass(matchResult) {
    if (matchResult.includes("win")) {
        return "win";
    } else if (matchResult.includes("lose")) {
        return "lose";
    } else {
        return "draw";
    }
}

function getUserScoreClass() {
    if (humanScore > computerScore) {
        return "win";
    } else if (humanScore < computerScore) {
        return "lose";
    } else {
        return "draw";
    }
}