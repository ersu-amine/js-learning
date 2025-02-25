//multiple inheritance achieved with interface in java but not in javascript, 
// there's no multiple inheritance in javascript

//no abstraction, no polymorphism, no encapsulation in javascript, WHAT!
//javascript is prototype-based language, not an object-oriented language

//there's a way to achieve something similar to abstraction, but there's no 100% abstraction
/**
 * Represents a Person.
 * @class
 * @author AE
 */
class Person {
    /**
     * Create a person.
     * @param {string} name - The name of the person.
     * @param {number} age - The age of the person.
     * @param {string} gender - The gender of the person.
     */
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    /**
     * Simulates the person eating.
     * @returns {void}
     */
    eat() {
        console.log(`${this.name} is eating`);
    }

    /**
     * Simulates the person sleeping.
     * @returns {void}
     */
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

/**
 * Represents a Student, extending Person.
 * @class
 * @extends Person
 * @author AE
 */
class Student extends Person {
    /**
     * Create a student.
     * @param {string} name - The name of the student.
     * @param {number} age - The age of the student.
     * @param {string} gender - The gender of the student.
     * @param {string} subject - The subject the student is studying.
     * @param {string|number} grade - The grade of the student.
     */
    constructor(name, age, gender, subject, grade) {
        super(name, age, gender);
        this.subject = subject;
        this.grade = grade;
    }

    /**
     * Simulates the student studying.
     * @returns {void}
     */
    study() {
        console.log(`${this.name} is studying ${this.subject}`);
    }

    /**
     * Simulates the student playing.
     * @returns {void}
     */
    play() {
        console.log(`${this.name} is playing ${this.subject}`);
    }
}

/**
 * Represents a Teacher, extending Person.
 * @class
 * @extends Person
 * @author AE
*/
class Teacher extends Person {
    /**
     * Create a teacher.
     * @param {string} name - The name of the teacher.
     * @param {number} age - The age of the teacher.
     * @param {string} gender - The gender of the teacher.
     * @param {string} subject - The subject the teacher teaches.
     * @param {number} salary - The salary of the teacher.
     */
    constructor(name, age, gender, subject, salary) {
        super(name, age, gender);
        this.subject = subject;
        this.salary = salary;
    }

    /**
     * Simulates the teacher teaching.
     * @returns {void}
     */
    teach() {
        console.log(`${this.name} is teaching ${this.subject}`);
    }

    /**
     * Simulates the teacher grading students.
     * @returns {void}
     */
    gradeStudents() {
        console.log(`${this.name} is grading students`);
    }
}