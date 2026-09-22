// alert('Welcome')
const secretNumber = Math.floor(Math.random() * 100) + 1
const keepGuess = []

function guessNumber (number) {
    let guess = 0;

    while (guess < 7) {

    const number = Number(window.prompt("Guess the secret number"))
    keepGuess.push(number)
    guess += 1

    if (number === secretNumber) {
        alert(`Congratulations, you got it in ${guess} attempt!!!`)
    } else if (number > secretNumber) {
        alert("Number too high, try again!")
    } else if (number < secretNumber) {
        alert("Number too low, try again!")
    } else {
        break
    }
    } 

    console.log(`Your nummber of guesses: ${keepGuess}`)
}
