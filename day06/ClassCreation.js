//use class keyword to define class


export class Car { //class name is not dependent on the file name
    //constructor is a special method that runs when a new object is created
    //parameters are passed when creating an object of a class

    //using this keyword to initialize attributes and assign at the same time 
    // unlike java, setting attributes first in class body, and assigning them in the constructor
    constructor(make = "Not provided", model = "Not provided", year = 0) { //constructor does not have class name like java
        this.make = make;
        this.model = model;
        this.year = year;
    }

    //method inside a class

    displayInfo() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }

    drive() {
        console.log(`${this.make} ${this.model} is driving`);
    }
}


/*
create a class named Coffee with following attributes:
    name (string)
    size (string)
    price (number)
    strength (number)
    creamed (boolean)
    sugary (boolean)
    yumminess (number)

    methods:
    displayInfo() - prints all attributes in the format "Name: value"
    addCream() - toggles creamed attribute
    addSugar() - toggles sugary attribute
    updateYumminess() - takes a number as a parameter and updates yumminess attribute
     - if the number is less than 0, set it to 0
     - if the number is greater than 10, set it to 10

Create an instance of the Coffee class and call all its methods to demonstrate their functionality.
*/

/**
 * Represents a Coffee object with various attributes and methods.
 */
export class Coffee { //use export keyword to make it accessible from other files
    /**
     * Creates a new Coffee instance.
     * @param {string} [name="Not provided"] - The name of the coffee.
     * @param {string} [size="Not provided"] - The size of the coffee.
     * @param {number} [price=0] - The price of the coffee.
     * @param {number} [strength=0] - The strength of the coffee.
     * @param {boolean} [creamed=false] - Whether the coffee is creamed.
     * @param {boolean} [sugary=false] - Whether the coffee is sugary.
     * @param {number} [yumminess=0] - The yumminess rating of the coffee.
     */
    constructor(name = "Not provided", size = "Not provided", price = 0, strength = 0, creamed = false, sugary = false, yumminess = 0) {
        this.name = name;
        this.size = size;
        this.price = price;
        this.strength = strength;
        this.creamed = creamed;
        this.sugary = sugary;
        this.yumminess = yumminess;
    }

    /**
     * Displays all attributes of the coffee instance.
     */
    displayInfo() {
        console.log(`Name: ${this.name}, Size: ${this.size}, Price: ${this.price}, Strength: ${this.strength}, Creamed: ${this.creamed}, Sugary: ${this.sugary}, Yumminess: ${this.yumminess}`);
    }

    /**
     * Toggles the creamed attribute of the coffee.
     */
    addCream() {
        this.creamed = !this.creamed;
    }

    /**
     * Toggles the sugary attribute of the coffee.
     */
    addSugar() {
        this.sugary = !this.sugary;
    }

    /**
     * Updates the yumminess attribute of the coffee.
     * @param {number} newYumminess - The new yumminess value to set.
     */
    updateYumminess(newYumminess) {
        if (newYumminess < 0) {
            this.yumminess = 0;
        } else if (newYumminess > 10) {
            this.yumminess = 10;
        } else {
            this.yumminess = newYumminess;
        }
    }
}

/*
let coffee1 = new Coffee("Espresso", "Regular", 3.5, 5, false, false, 7);

coffee1.addCream();
coffee1.addSugar();
coffee1.displayInfo();
coffee1.updateYumminess(12);
coffee1.displayInfo();
coffee1.updateYumminess(-5);
coffee1.displayInfo();
*/
