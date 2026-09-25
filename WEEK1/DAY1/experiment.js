console.log("5" + 3);
console.log("5" - 3);
console.log("5" * "2");
console.log("5" + true);
console.log(5 + null);
console.log(5 + undefined);
console.log("" + 0);
console.log([] + []);
console.log([] + {});

console.log(null == undefined);
console.log(null === undefined);
console.log(0 == "");
console.log(0 === "");
console.log(0 == false);
console.log("0" == false);
console.log(NaN == NaN);

console.log(typeof 42);
console.log(typeof "hello");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

const x = 5;
// x = 10
console.log(x)

const person = {name: "Ada"};
person.name = "Grace"
console.log(person);

const userName = "Ada";
const age = 24;
console.log(`Name: ${userName}, age:${age}`);
console.log(`Next year: ${age + 1}`);

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution")
)



















