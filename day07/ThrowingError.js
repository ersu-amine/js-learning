console.log("Throwing Error Practice");

let age = 22;

if (age > 21 && age < 55) {
    console.log("Age is valid");
}
else {
    throw new Error("Age is not valid");
}

age = 56;

if (age > 21 && age < 55) {
    console.log("Age is valid");
}
else {
    throw new Error(`Age is not valid ${age}`);
}
