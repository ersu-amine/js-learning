//javascript operators practice

console.log(10 - 6);
console.log(10 + 5);
console.log(10 * 7);
console.log(10 / 4); //2.5 in js, in java it will give 2
//in js, it gives decimal number even though division by integers

//ASSIGNMENT OPERATOR
let y = 5;
console.log(y); //5

y = 3;
console.log(y); //3

y += 23; //y = y + 23 --> 3 + 23 = 26

y -= 10; //y = y - 10 --> 26 - 10 = 16

//RELATIONAL OPERATORS
// >, <, >=, <=, ==, ===, !=, !==
//All return boolean value, true/false

//GREATER THAN >
console.log(10 > 5); //true

//LESS THAN <
console.log(10 < 5); //false

//EQUAL TO ==, work differently in js than java
//doesn't care about the data type of elements
console.log(100 == 100); //true

//ignores data type, true
console.log(100 == "100"); //true

//TRIPLE EQUAL ===  STRICT EQUAL
console.log(100 === 100); //true
//strict operator will not ignore the data type
console.log(100 === "100"); //false

//NOT EQUAL !=
console.log(100 != 100); //false

console.log(100 != 900); //true

//ignores data type, false
console.log(100 != "100"); //false
//Strict not equal operator
console.log(100 !== "100"); //true


