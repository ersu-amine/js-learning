//create an array os string containing 9 names from alphatetical order
let names = ["Aaron", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Henry", "Isabella"];

//swap the first and last names
let temp = names[0];
names[0] = names[names.length - 1];
names[names.length - 1] = temp;

//display the updated array of names
console.log(names);

