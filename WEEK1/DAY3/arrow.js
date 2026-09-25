function add(a,b) {return a + b};
const add2 = function(a,b) {return a + b};
const add3 = (a,b) => a + b;


console.log(add(2,5))
console.log(add2(2,5))
console.log(add3(2,5))

function greet(name = "friend") {
    return `Hello ${name}`;
}
console.log(greet())
console.log(greet("Ada"))

