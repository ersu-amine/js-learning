/* imports the file as a module
import pkg from './ClassCreation.js';
const { Car } = pkg;
*/

//importing classes from other files using relative path 
import { Coffee } from './ClassCreation.js';
import { Car } from './ClassCreation.js';


let car1 = new Car("Toyota", "Camry", 2020);

console.log(car1);

let coffee = new Coffee("Double Double", "Medium", 1.75, 5, false, false, 100);

coffee.addCream();
coffee.addSugar();
console.log(coffee);