function add(a,b) {return a + b}
const subtract = function(a,b) {return a - b}
const multiply = (a, b) => (a * b)

function divide (a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed."
    }
    return a / b
}

console.log(add(10, 4))
console.log(subtract(10, 4))
console.log(multiply(10, 4))
console.log(divide(10, 4))

function calculate(a, b) {
    return function add() {
        return a+b
 }    
}
// Is it possible to return two functions in one function

const result = calculate(2,4)
console.log(result())


