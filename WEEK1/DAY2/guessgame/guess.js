
const secretNumber = Math.floor(Math.random() * 100) + 1

const keepGuess = []

function guessNumber (number) {
    alert(`Welcome to my Guess-Game, Player 🤗` )

    let guess = 0;

    while (guess < 7) {

    const input = Number(window.prompt("Guess the secret number"))
    if (input === null) {
        alert("You quit!!!")
        console.log("You quit!!!")
    }
    
    let number = input
    keepGuess.push(number)
    guess += 1

    if (number === secretNumber) {
        alert(`Congratulations, you got it in ${guess} attempt!!!`)
        console.log(`Congratulations, you got it in ${guess} attempt!!!`)
        break;
    } 

    if (guess === 7) {
        alert(`Sorry, you are out of attempt for now!!!`)
        console.log("Sorry, you are out of attempt for now!!!")
        break;
    }
    
    if (number > secretNumber) {
        alert("Number too high, try again!")
        console.log("Number too high, try again!")
        // break;
    } 
    
    if (number < secretNumber) {
        alert("Number too low, try again!")
        console.log("Number too low, try again!")
    }

    if (isNaN(number)) {
        alert("Invalid Number, kindly enter digits only!!!")
        console.log("Invalid Number, kindly enter digits only!!!")
    }


    } 

    console.log(`Your guesses: (${guess}), ${keepGuess}`)
}

guessNumber()
