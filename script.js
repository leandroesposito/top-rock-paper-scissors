function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choiceNumber = Math.floor(Math.random() * choices.length)
    let choice = choices[choiceNumber];

    return choice;
}
