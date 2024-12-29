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