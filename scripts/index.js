let player = [
    currentChoice= null
];
let computer = [
    currentChoice= null
];

let choices = ["rock", "paper", "scissors"];

player.currentChoice = choices[2];
computer.currentChoice = choices[2];

let outcome = [];
let lost = "Player lost!";
let won = "Player won!";
let tie = "It's a tie.";

function playGame() {
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

playGame();


