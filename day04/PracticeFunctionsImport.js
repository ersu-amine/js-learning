const { displayNumber, login } = require("../day03/PracticeFunctions.js");
const { circumference, area } = require("./CircleFunctions.js")

console.log("Imported functions are called below:");
displayNumber();

console.log(login("admin", "password12345"));

console.log(circumference(5));

console.log(area(5));