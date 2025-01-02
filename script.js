function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choiceNumber = Math.floor(Math.random() * choices.length)
    let choice = choices[choiceNumber];

    return choice;
}

function getHumanChoice() {
    let isValidChoice = false;
    let choice = null;
    // while choice is invalid
    while (!isValidChoice) {
        // get choice from user using prompt
        choice = prompt('Write your choice between "rock", "paper" and "scissors".');
        // check if choice is null
        if (choice) {
            // trim choice
            // convert to lowercase
            choice = choice.trim().toLowerCase();
            // validate choice
            isValidChoice = choice === "rock" || choice === "paper" || choice === "scissors";
        }
    }

    // return choice
    return choice;
}

function playGame(numRounds) {
    function playRound(humanChoice, computerChoice) {
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
        console.log(message);
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

    for (let i = 0; i < numRounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    showResults(humanScore, computerScore);
}
