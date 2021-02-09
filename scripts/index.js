const player = {
    currentChoice: null
};
const computer = {
    currentChoice: null
};

const choices = ["Rock", "Paper", "Scissors"];

let outcome = [];
let lost = "Player lost!";
let won = "Player won!";
let tie = "It's a tie.";

function computerChoose() {
    const randomIndex = Math.floor(Math.random()*choices.length);
    computer.currentChoice = choices[randomIndex];
}

compareChoices();

function compareChoices() {
    computerChoose();
    if (player.currentChoice === computer.currentChoice) {
        const text = "It's a tie! Player choose " + player.currentChoice + " and the computer choose "+ computer.currentChoice; 
        writeResult(text);
        const roundResult = 'tie';
        updateRoundResult(roundResult);
    } else if (player.currentChoice === choices[0]) {
        if (computer.currentChoice === choices[1]) {
            const text = "Player lost! Player choose " + player.currentChoice + " and the computer choose "+ computer.currentChoice;
            writeResult(text);
            const roundResult = 'lost';
            updateRoundResult(roundResult);
        } else {
            const text = "Player won! Player choose " + player.currentChoice + " and the computer choose "+ computer.currentChoice;
            writeResult(text);
            const roundResult = 'won';
            updateRoundResult(roundResult);
        }
    } else if (player.currentChoice === choices[1]) {
        if (computer.currentChoice === choices[0]) {
            const text = "Player won! Player choose " + player.currentChoice + " and the computer choose "+ computer.currentChoice;
            writeResult(text);
            const roundResult = 'won';
            updateRoundResult(roundResult);
        } else {
            const text = "Player lost! Player choose " + player.currentChoice + " and the computer choose "+ computer.currentChoice;
            writeResult(text);
            const roundResult = 'lost';
            updateRoundResult(roundResult);
        }
    } else if (player.currentChoice === choices[2]) {
        if (computer.currentChoice === choices[0]) {
            const text = "Player lost! Player choose " + player.currentChoice + " and the computer choose "+ computer.currentChoice;
            writeResult(text);
            const roundResult = 'lost';
            updateRoundResult(roundResult);
        } else {
            const text = "Player won! Player choose " + player.currentChoice + " and the computer choose "+ computer.currentChoice;
            writeResult(text);
            const roundResult = 'won';
            updateRoundResult(roundResult);
        }
    }
};

function writeResult(text) {
    const divResult = document.querySelector(".result");
    const result = document.createElement('p');
    result.setAttribute("class", "newResult");
    result.innerText = text;
    divResult.appendChild(result);
}

function clearScreen() {
    const newResult = document.querySelector('p');
    newResult.remove();
}

document.querySelector('#rock').addEventListener('click', playerChoose);
document.querySelector('#paper').addEventListener('click', playerChoose);
document.querySelector('#scissors').addEventListener('click', playerChoose);

function playerChoose(e) {
    clearScreen();
    player.currentChoice = e.target.innerText;
    compareChoices();
};

let playerScore = 0;
let computerScore = 0;

function updateRoundResult(roundResult) {
    if (playerScore < 4 && computerScore < 4) {
        if (roundResult === "won") {
            playerScore += 1;
            writeScoreCount();
        } else if (roundResult === "lost") {
            computerScore += 1;
            writeScoreCount();
        }
    } else if (playerScore = 5) {
        const text = "Congrats! Player won against the Computer"
        clearScreen();
        writeResult(text);
        writeScoreCount();
        endgame()
    } else if (computerScore = 5) {
        const text = "Better luck next time. The Computer won"
        clearScreen();
        writeResult(text);
        writeScoreCount();
        endgame()
    }

}


function writeScoreCount() {
    const playerScoreCount = document.querySelector('.playerScoreCount');
    const computerScoreCount = document.querySelector('.computerScoreCount');
    playerScoreCount.innerText = playerScore;
    computerScoreCount.innerText = computerScore;
};

function endgame() {
    hideButtons();
    createRetryButton();
}

function createRetryButton() {
    const divButton = document.querySelector('.buttons');
    const retryButton = document.createElement('button');
    retryButton.setAttribute('class', 'retryButton btn btn-style');
    retryButton.innerHTML = "Try Again?";
    retryButton.onclick = restart;
    divButton.appendChild(retryButton);
}

function showButtons() {
    const rockButton = document.querySelector('#rock');
    const paperButton = document.querySelector('#paper');
    const scissorsButton = document.querySelector('#scissors');
    rockButton.style.display = '';
    paperButton.style.display = '';
    scissorsButton.style.display = '';
}

function hideButtons() {
    const rockButton = document.querySelector('#rock');
    const paperButton = document.querySelector('#paper');
    const scissorsButton = document.querySelector('#scissors');
    rockButton.style.display = 'none';
    paperButton.style.display = 'none';
    scissorsButton.style.display = "none";
}

function restart() {
    playerScore = 0;
    computerScore = 0;
    writeScoreCount();
    console.log("restart game");
    showButtons();
    const retryButton = document.querySelector('.retryButton');
    retryButton.remove();
    const text = "New Game"
    clearScreen();
    writeResult(text);
}