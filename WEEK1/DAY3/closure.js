function makeCounter() {
    let count = 1;
    return function() {
        return count++
    }
}

const counter = makeCounter()
console.log(counter())
console.log(counter())
console.log(counter())

const counter2 = makeCounter();
console.log(counter2())
console.log(counter())

// My answer to the question is count kept running probably because
// count is an inner function, so It will keep running anytime the function (makeCounter) is called 
