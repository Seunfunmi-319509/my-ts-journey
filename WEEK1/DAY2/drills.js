const values = [0, 1, -1, "", "hello", "0", "null", undefined, NaN, [], {}];

for (const v of values) {
    if (v) {
        console.log(v, "is truthy");
    } else {
        console.log(v, "is falsy");
    }
}

// 0 is falsy
// 1 is truthy
// -1 is truthy
// "" is falsy
// "hello" is truthy
// "0" is truthy
// undefined is falsy
// NaN is falsy
// [] is truthy
// {} is falsy
// true is truthy
// false is falsy

console.log(true && false);
console.log(true || false);
console.log(!true);

console.log("hello" && "world"); //world
console.log("" || "world") // world
console.log("" && "world") // ""
console.log("" || "fallback"); // fallback
console.log(null ?? "default");
console.log(0 || "default");
console.log(0 ?? "default");

// TERNARY
// If condition is true, give me the first one; else give me the second one
const age = 20;
const status = age >= 18 ? "adult" : "minor"
console.log(status)

// this keyword
person = {
    name: "mykels",
    greet(){

    }
}
// To use a function in an object, don't use the keyword







