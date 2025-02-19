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

//replace method, replace the first occurance
name2 = name2.replace("a", "");
name2 = name2.replace("e", "i");
console.log(name2); //mine

//replace all occurances
let str = "Banana";
console.log(str); //Banana
str = str.replaceAll("n","N");
console.log(str);//BaNaNa


//includes() method
let emailAddress = "email@gmail.com";
console.log(emailAddress.includes(".com")); //true

//substring() method
let domain = emailAddress.substring(emailAddress.indexOf("@")+1, emailAddress.indexOf(".")); //gmail

//String concatenation
let str1 = "Hello " + name; //Hello Amine, with plus operator concatenation
let str2 = `Hello ${name}`; //Hello Amine, placeholder concatenation with ${}, must use backticks