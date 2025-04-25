const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;


const playGame = () => {
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissors");
const playerOptions = [rockBtn, paperBtn, scissorBtn]; 
const computerOptions = ['rock', 'paper', 'scissors'];

playerOptions.forEach(option => {
    option.addEventListener('click', function () {
        const movesLeft = document.querySelector('.movesleft')
        moves++;
        movesLeft.innerText = `Moves Left: ${10 - moves}`;

        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[choiceNumber];

        winner(this.innerText, computerChoice)

        if (moves == 10) {
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

    const outcome = `${player}-${computer}`;
    
        switch (outcome) {
            case 'rock-scissors':
            case 'paper-rock':
            case 'scissors-paper':
                result.textContent = 'Player Wins';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
                break;
    
            case 'scissors-rock':
            case 'rock-paper':
            case 'paper-scissors':
                result.textContent = 'Computer Wins';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
                break;
    
            default:
                result.textContent = 'Draw';
                break;
        }
    };

const gameOver = (playerOptions, movesLeft) => {
    const chooseMove = document.querySelector('.move');
    const result = document.querySelector('.result');
    const reloadBtn = document.querySelector('.reload');

    playerOptions.forEach(option => { option.style.display = 'none'; })
    chooseMove.innerText = 'Game Over!';
    movesLeft.style.display = 'none';

    let outcome;
    if (playerScore > computerScore) {
        outcome = 'player';
    } else if (playerScore < computerScore) {
        outcome = 'computer';
    } else {
        outcome = 'draw';
    }

    switch (outcome) {
        case 'player':
            result.innerText = 'Player Wins';
            break;
        case 'computer':
            result.innerText = 'Computer Wins';
            break;
        case 'draw':
        default:
            result.innerText = 'Draw';
            break;
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