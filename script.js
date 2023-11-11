const diceImages = ["img/Page 1.png", "img/Page 2.png", "img/Page 3.png", "img/Page 4.png", "img/Page 5.png", "img/Page 6.png"];
const dice1Element = document.getElementById("dice1");
const dice2Element = document.getElementById("dice2");
const player1ScoreElement = document.getElementById("player1-score");
const player2ScoreElement = document.getElementById("player2-score");
const rollButton = document.getElementById("roll-btn");
const resetButton = document.getElementById("reset-btn");

let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;

rollButton.addEventListener("click", rollDice);
resetButton.addEventListener("click", resetGame);

function rollDice() {
    // Disable the roll button while rolling
    rollButton.disabled = true;

    // Simulate dice roll
    const roll1 = Math.floor(Math.random() * 6);
    const roll2 = Math.floor(Math.random() * 6);

    // shaking animation
    shakeDice(dice1Element);
    shakeDice(dice2Element);

    setTimeout(() => {
        dice1Element.src = diceImages[roll1];
        dice2Element.src = diceImages[roll2];

        const roundScore = roll1 + roll2 + 2; 
        if (currentPlayer === 1) {
            player1Score += roundScore;
            player1ScoreElement.textContent = player1Score;
            currentPlayer = 2;
        } else {
            player2Score += roundScore;
            player2ScoreElement.textContent = player2Score;
            currentPlayer = 1;
        }

        rollButton.disabled = false;
    }, 1000);
}

function shakeDice(diceElement) {
    diceElement.classList.add("shake");
    setTimeout(() => {
        diceElement.classList.remove("shake");
    }, 1000);
}

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    player1ScoreElement.textContent = player1Score;
    player2ScoreElement.textContent = player2Score;
    dice1Element.src = "img/Page 1.png";
    dice2Element.src = "img/Page 1.png";
    currentPlayer = 1;
    rollButton.disabled = false;
}

