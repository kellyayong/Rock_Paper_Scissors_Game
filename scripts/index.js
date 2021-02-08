const player = {
    currentChoice: null
};
const computer = {
    currentChoice: null
};

const choices = ["rock", "paper", "scissors"];

player.currentChoice = choices[2];

let outcome = [];
let lost = "Player lost!";
let won = "Player won!";
let tie = "It's a tie.";

function computerChoose() {
    const randomIndex = Math.floor(Math.random()*choices.length);
    computer.currentChoice = choices[randomIndex];
    console.log("computer chooses "+computer.currentChoice);
}

compareChoices();

function compareChoices() {
    computerChoose();
    if (player.currentChoice === computer.currentChoice) {
        console.log(tie);
        return tie;
    } else if (player.currentChoice === choices[0]) {
        if (computer.currentChoice === choices[1]) {
            console.log(lost);
            return lost;
        } else {
            console.log(won);
            return won;
        }
    } else if (player.currentChoice === choices[1]) {
        if (computer.currentChoice === choices[0]) {
            console.log(won);
            return won;
        } else {
            console.log(lost);
            return lost;
        }
    } else if (player.currentChoice === choices[2]) {
        if (computer.currentChoice === choices[0]) {
            console.log(lost);
            return lost;
        } else {
            console.log(won);
            return won;
        }
    }
};


document.querySelector('#rock').addEventListener('click', playerChoose);
document.querySelector('#paper').addEventListener('click', playerChoose);
document.querySelector('#scissors').addEventListener('click', playerChoose);


function playerChoose(e) {
    player.currentChoice = e.target.innerText;
    console.log("Player chooses "+player.currentChoice);
    compareChoices();
};

