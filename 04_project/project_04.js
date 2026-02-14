const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const UserInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let prevGuesse = [];
let numGuesse = 1;

let playGame = true;
if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(UserInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}
function validateGuess(guess) {
    if (isNaN(guess)) {
       alert("Please enter a valid number");
    } else if (guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100");
    } else {
        prevGuesse.push(guess);
        numGuesse++;
        UserInput.value = "";
        displayGuess(guess);
        
        if (numGuesse > 10) {
            displayMessage(`Game Over!. Random number was ${randomNumber}`);
            endGame();
        } else {
            checkGuess(guess);
        }
    }
}
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('You guessed it right! Congrats!');
        endGame();
    } else if (guess < randomNumber) {
        displayMessage("Toooooo low! Try a higher number.");
    } else {
        displayMessage("Toooooo high! Try a lower number.");
    }
}

function displayGuess(guess) {
    UserInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuesse++;
    remaining.innerHTML = `${10 - numGuesse}`;
}
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function newGame() {
 UserInput.value = ''
 UserInput.setAttribute("disabled", ''); 
 p.classList.add("button");
 p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
 startOver.appendChild(p)
 playGame = false;
 newGame ();

}

function endGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuesse = []
        numGuesse = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10 - numGuesse}`;
        UserInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true
    })

}  