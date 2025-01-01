function getComputerChoice() {
    const CHOICES = ["rock", "paper", "scissors"];
    return CHOICES[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return prompt("Enter Rock, Paper, or Scissors: ");
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1;
        console.log(`You win, ${humanChoice} beats ${computerChoice}`);
        banner.textContent = `You win, ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice === computerChoice) {
        console.log("It's a tie");
        banner.textContent = "It's a tie";
    } else {
        computerScore += 1;
        console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
        banner.textContent = `You lose, ${computerChoice} beats ${humanChoice}`;
    }
}

function checkScore(humanScore, computerScore) {
    if (humanScore !== 5 && computerScore !== 5) {
        return
    }
    let text = ''
    if (humanScore > computerScore) {
        text = `You win! Final score: ${humanScore} to ${computerScore}`;
    } else if (humanScore < computerScore) {
        text = `You lose! Final score: ${humanScore} to ${computerScore}`;
    } else {
        text = `It's a tie! Final score: ${humanScore} to ${computerScore}`;
    }
    banner.textContent = text;
    resetGame();
}

function resetGame() {
    computerScore = 0;
    humanScore = 0;
    scoreboard.textContent = `Your Score: ${humanScore}, Computer Score: ${computerScore}`;
}

const scoreboard = document.createElement('div');
scoreboard.textContent = `Your Score: ${humanScore}, Computer Score: ${computerScore}`;
document.body.appendChild(scoreboard);

const rock = document.createElement('button');
rock.textContent = 'rock';
rock.id = 'rock';
rock.style.padding = '10px 20px';
rock.addEventListener('click', (e) => {
    // alert(e.target.id);
    playRound('rock', getComputerChoice());
    scoreboard.textContent = `Your Score: ${humanScore}, Computer Score: ${computerScore}`;
    checkScore(humanScore, computerScore)
});
document.body.appendChild(rock);

const paper = document.createElement('button');
paper.textContent = 'paper';
paper.id = 'paper';
paper.style.padding = '10px 20px';
paper.addEventListener('click', (e) => {
    // alert(e.target.id);
    playRound('paper', getComputerChoice());
    scoreboard.textContent = `Your Score: ${humanScore}, Computer Score: ${computerScore}`;
    checkScore(humanScore, computerScore)
});
document.body.appendChild(paper);

const scissors = document.createElement('button');
scissors.textContent = 'scissors';
scissors.id = 'scissors';
scissors.style.padding = '10px 20px';
scissors.addEventListener('click', (e) => {
    // alert(e.target.id);
    playRound('scissors', getComputerChoice());
    scoreboard.textContent = `Your Score: ${humanScore}, Computer Score: ${computerScore}`;
    checkScore(humanScore, computerScore)
});
document.body.appendChild(scissors);

const banner = document.createElement('div');
banner.textContent = '';
document.body.appendChild(banner);

// for (let i = 0; i < 5; i++) {
//     const computerSelection = getComputerChoice();
//     const humanSelection = getHumanChoice();
//     playRound(humanSelection, computerSelection);
// }
// if (humanScore > computerScore) {
//     console.log(`You win! Final score: ${humanScore} to ${computerScore}`);
// } else if (humanScore < computerScore) {
//     console.log(`You lose! Final score: ${humanScore} to ${computerScore}`);
// } else {
//     console.log(`It's a tie! Final score: ${humanScore} to ${computerScore}`)
// }
