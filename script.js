function getComputerChoice() {
    const CHOICES = ["rock", "paper", "scissors"];
    return CHOICES[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return prompt("Enter Rock, Paper, or Scissors: ");
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase()
        if (humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper") {
            humanScore += 1;
            console.log(`You win, ${humanChoice} beats ${computerChoice}`);
        } else if (humanChoice === computerChoice) {
            console.log("It's a tie");
        } else {
            computerScore += 1;
            console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
        }
    }

    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log(`You win! Final score: ${humanScore} to ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`You lose! Final score: ${humanScore} to ${computerScore}`);
    } else {
        console.log(`It's a tie! Final score: ${humanScore} to ${computerScore}`)
    }
}

playGame()