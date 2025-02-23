// create a for loop that starts from 1 and ends at 9
              // and prints each number

for (let i = 1; i <= 9; i++) {
  console.log(i);
}

//create an array with student names including first names and last names fo 7 students
//aaray of string
let students = ["John Doe", "Jane Smith", "Michael Johnson", "Emily Davis", "Sarah Wilson", "Daniel Brown", "Christopher Lee"];

//display students names on the console using for of loop
for (let student of students) {
  console.log(student);
}

// set the second student name to "Amine Ersu"
students[1] = "Amine Ersu";

// remove the student at index 4
students.splice(4, 1);

//display the updated array of students
console.log(students);