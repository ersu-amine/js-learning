console.log("String practice");
//use single or double quotes for strings
//try to use double quotes always, xpath will have single quotes

//string can be manipulated using index numbers, similar to python?

//length is a variable, not method

let name = "Amine";
console.log(name.length); //5

//charAt() method
console.log(name.charAt(4)); //e

//toUpperCase() method, toLowerCase() method
name = name.toUpperCase();
console.log(name);

name = "Amine";

//no equalsCaseIgnore() method in javascript
let name2 = "amine";

//ignore case sensitivity by converting both strings to upper case
console.log(name2.toUpperCase() === name.toUpperCase()); //true

//includes() method

console.log(name.includes("ne")); //true
console.log(name.includes("me")); //false

//replace method
name2 = name2.replace("a", "");
console.log(name2); //mine