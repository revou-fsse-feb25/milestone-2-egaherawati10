let y = Math.floor(Math.random() * 100) + 1;
let guess = 1;

document.getElementById("submitguess").onclick = function () {
    let x = document.getElementById("guessField").value;
    if (x == y) {
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " GUESS ");
    }
    else if (x > y) {
        guess++;
        alert("OOPS! TOO HIGH");
    }
    else {
        guess++;
        alert("OOPS! TOO LOW");
    }
}