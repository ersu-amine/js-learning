//dynamic size
//combination of array and list of java programming language
//can change size, accept mix of data types
//no restriction on type and size

let array = [1, 2, "monday", 4, "coffee"];

array[0] = "pikachu"; //changed from int type to string type

console.log(array);

//there's no type safety, more chance of error
//should strore same type of data to prevent issues

let drinks = ["apple juice", "coffee", "milk","hot chocolate", "beetle juice"];

console.log(drinks);

console.log("===========Methods of array===========");

console.log("push(element) method"); //put element at the end of the array
drinks.push("fanta");
console.log(drinks);

console.log("unshift(element) method"); //insert at the beggining of the array
drinks.unshift("h2o");
drinks.unshift("h2o");//accepts multiples

console.log("splice(i, # of elements) method"); //remove elements starting from index i
drinks.splice(4,2);
console.log(drinks);

console.log("shift() method"); //remove the first element of the array
drinks.shift();

console.log("pop() method"); //remove the last element of the array
drinks.pop();
console.log(drinks);

for(let each of drinks){//iterate in index order
    console.log(`I am drinking ${each}`);
}

for(let k = drinks.length-1; k >=0; k--){//iterate in reverse order
    console.log(`I am sipping ${drinks[k]}`);
}