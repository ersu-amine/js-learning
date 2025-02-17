// var, let, const keywords for variables

//let more preferred

//let name;
//undefined before it has data

let a1 = "Amine";

console.log(a1);

let value = 20;
console.log(typeof value);
console.log(value);

let variable = true;
console.log(typeof variable);
console.log(variable);

//can have double type number
value = 7.5;
console.log(value);

//let -> can be used for local variable purposes inside a block
if (true) {
    let name = "Amine";
    console.log(name);
};

//console.log(name); //error

//let - block type, only reachable inside the block
//let - local type, only reachable inside the block

//var - global type, always reachable
//cannot be local variable  anymore 
if (true) {
    var number = 1993;
    console.log(number);
};
console.log(number);

//var allows variable to be used outside the block
//var allows variable to be initialized again , not good practice
//it might be hard to keep track of variable names
var firstName = "Amine";

var firstName = "John";

//const - constant, cannot be changed
//similar to final keyword in Java
const AGE = 11; //use capital letter for constant variable names

console.log(AGE);
//AGE = 12; //error