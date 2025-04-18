const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let movesLeft = 10;

const playGame = () => {
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const playerOptions = [rockBtn, paperBtn, scissorsBtn]; 
const computerOptions = ['rock', 'paper', 'scissors'];

playerOptions.forEach(option => {
    option.addEventListener('click', function () {
        const movesLeft = document.querySelector('.movesleft')
        moves++;
        movesLeft.innerText = `Moves Left: ${10 - moves}`;

        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[choiceNumber];

        winner(this.innerText, computerChoice)

        if (moves === 10) {
            gameOver(playerOptions, movesLeft);
        }
    })
})
}
const winner = (player, computer) => {
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.p-count');
    const computerScoreBoard = document.querySelector('.c-count');
    player = player.toLowerCase();
    computer = computer.toLowerCase();

    if (player === computer) {
        result.textContent = 'Draw';
    }
    else if (player === 'rock') {
    if (computer === 'paper') {       
        result.textContent = 'Computer Wins';
        computerScore++;
        computerScoreBoard.textContent = computerScore;
    }
    else {
        result.textContent = 'Player Wins';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
    }
}
else if (player === 'paper') {
    if (computer === 'scissors') {
        result.textContent = 'Computer Wins';
        computerScore++;
        computerScoreBoard.textContent = computerScore;
    }
    else {
        result.textContent = 'Player Wins';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
    }
}
else if (player === 'scissors') {
    if (computer === 'rock') {
        result.textContent = 'Computer Wins';
        computerScore++;
        computerScoreBoard.textContent = computerScore;
    }
    else {
        result.textContent = 'Player Wins';
        playerScore++;
        playerScoreBoard.textContent = playerScore;
    }
}
}

const gameOver = (playerOptions, movesLeft) => {
    const chooseMove = document.querySelector('.move');
    const result = document.querySelector('.result');
    const reloadBtn = document.querySelector('.reload');

    playerOptions.forEach(option => { optiion.style.display = 'none' });
    chooseMove.innerText = 'Game Over!';
    movesLeft.style.display = 'none';

if (playerScore > computerScore) {
    result.style.fontsize = '2rem';
    result.textContent = 'Player Wins';
    result.style.color = '#2a495b';
}
else if (playerScore < computerScore) {
    result.style.fontsize = '2rem';
    result.textContent = 'Computer Wins';
    result.style.color = '#2a495b';
}
else {
    result.style.fontsize = '2rem';
    result.textContent = 'Draw';
    result.style.color = '#2a495b';
}
reloadBtn.innerText = 'Play Again';
reloadBtn.style.display = 'flex';
reloadBtn.addEventListener('click', () => {
    window.location.reload();
})
}
playGame();
}
game();