function add(a,b) {return a + b}
const subtract = function(a,b) {return a - b}
const multiply = (a, b) => (a * b)
const divide = (a, b) => (a / b)

console.log(add(10, 4))
console.log(subtract(10, 4))
console.log(multiply(10, 4))
console.log(divide(10, 4))

function calculate(a, b) {
    return function add() {
        return a+b
    }
    
}

const result = calculate(2,4)
console.log(result())


