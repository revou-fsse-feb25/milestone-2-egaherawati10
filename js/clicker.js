document.addEventListener("DOMContentLoaded", function () {
    let score = 0;
    let clickValue = 1;
    const scoreElement = document.getElementById("score");
    const clickButton = document.getElementById("click-button");
    const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#FFA500", "#800080", "#FFC0CB", "#808080"];

    function updateScore() {
        scoreElement.textContent = `Points: ${score}`;
    }

    clickButton.addEventListener("click", (event) => {
        score += clickValue;
        updateScore();
        createClickEffect(event.clientX, event.clientY);
    })

    var click = 0;
    var outOfTime = false;
    function clicker() {
        if(!outOfTime) {
            click+=1;
            document.getElementById("score").innerHTML = "Points: " + click;
    }}

    var time = 30;
    var timer= setInterval(function() {
        time--;
        document.getElementById("timer").innerHTML = time + " seconds remaining!";
        if (time == 0) {
            clearInterval(timer);
            document.getElementById("timer").innerHTML = "Time's up!";
            outOfTime = true;
            gameOver();
        }
    }, 1000);

    function gameOver() {
        cancelInterval(timer);
        $('#playAgainButton').show();
    }

    function updateTimer() {
        timeLeft = timeLeft - 1;
        if(timeLeft >= 0)
        $('#timer').html(timeLeft);
        else {
            gameOver();
        }
    }

    function createClickEffect(x, y) {
        const effect = document.createElement("span");
        effect.className = "click-effect";
        effect.style.left = `${x}px`;
        effect.style.top = `${y}px`;
        effect.style.backgroundColor = 
        colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(effect);
        setTimeout(() => document.body.removeChild(effect), 500);
}

updateScore();
})