document.getElementById('submit').onclick = function() {
    let guess = document.getElementById('guess').value;
    let randomGuess = Math.floor(Math.random() * 10);
    console.log(randomGuess);

    if (guess == randomGuess) {
        alert("You've got it right")
    } else {
        alert(`Good luck next time. The answer was ${randomGuess}`);
    }
}