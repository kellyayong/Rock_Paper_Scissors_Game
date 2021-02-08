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
    } else if (player.currentChoice === choices[0]) {
        if (computer.currentChoice === choices[1]) {
            const text = "Player lost! Player choose " + player.currentChoice + " and the computer choose "+ computer.currentChoice;
            writeResult(text);
        } else {
            const text = "Player won! Player choose " + player.currentChoice + " and the computer choose "+ computer.currentChoice;
            writeResult(text);
        }
    } else if (player.currentChoice === choices[1]) {
        if (computer.currentChoice === choices[0]) {
            const text = "Player won! Player choose " + player.currentChoice + " and the computer choose "+ computer.currentChoice;
            writeResult(text);
        } else {
            const text = "Player lost! Player choose " + player.currentChoice + " and the computer choose "+ computer.currentChoice;
            writeResult(text);
        }
    } else if (player.currentChoice === choices[2]) {
        if (computer.currentChoice === choices[0]) {
            const text = "Player lost! Player choose " + player.currentChoice + " and the computer choose "+ computer.currentChoice;
            writeResult(text);
        } else {
            const text = "Player won! Player choose " + player.currentChoice + " and the computer choose "+ computer.currentChoice;
            writeResult(text);
        }
    }
};

function writeResult(text) {
    const divResult = document.querySelector(".result");
    const result = document.createElement('p');
    result.innerText = text;
    divResult.appendChild(result);
}

document.querySelector('#rock').addEventListener('click', playerChoose);
document.querySelector('#paper').addEventListener('click', playerChoose);
document.querySelector('#scissors').addEventListener('click', playerChoose);

function playerChoose(e) {
    player.currentChoice = e.target.innerText;
    compareChoices();
};

