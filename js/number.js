let y = Math.floor(Math.random() * 50) + 1;
let guess = 1;

document.getElementById("submitguess").onclick = function () {
    let x = parseInt(document.getElementById("number").value);
    
    switch (true) {
        case (isNaN(x) || x < 1 || x > 50):
            document.getElementById("result").textContent = "Invalid Input";
            break;
        case (x === y):
            document.getElementById("result").textContent = 'Congrats! You Guessed It in ' + guess + ' Guess';
            break;
        case (x > y):
            document.getElementById("result").textContent = 'Oops! Too High';
            guess++;
            break;
        case (x < y):
            document.getElementById("result").textContent = 'No no! Too Low';
            guess++;
            break;
        default:
            document.getElementById("result").textContent = 'Invalid Input';
    }
}