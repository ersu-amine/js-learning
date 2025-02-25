//create an array os string containing 9 names from alphatetical order
let names = ["Aaron", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Henry", "Isabella"];

//swap the first and last names
let temp = names[0];
names[0] = names[names.length - 1];
names[names.length - 1] = temp;

//display the updated array of names
console.log(names);

console.log("array numbers example");
//create a numbers array with 11 random numbers between 1 and 100
let numbers = [];
for (let i = 0; i < 11; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1);
}
//display the numbers array

console.log(numbers);

//sort the numbers array in ascending order using loops

for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
        if (numbers[j] > numbers[j + 1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}

//display the sorted numbers array
console.log(numbers);

console.log("array objects example");
//create an array of objects representing students with properties name, age, and grade
let students = [
    { name: "Alice", age: 18, grade: 95 },
    { name: "Bob", age: 19, grade: 85 },
    { name: "Charlie", age: 20, grade: 90 },
    { name: "David", age: 17, grade: 75 },
    { name: "Eve", age: 18, grade: 92 }
];

//display grades of all students in descending order

students.sort((a, b) => b.grade - a.grade);

for (let student of students) {
    console.log(`${student.name}'s grade: ${student.grade}`);
}
