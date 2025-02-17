//similar to java, but with different syntax
console.log("For loop practice");
for (let i = 0; i < 3; i++) {
    console.log("Hello ");
}

//break and continue statements have same function as java
console.log("Break statement practice");
for (let i = 0; i < 3; i++) {
    if (i == 1) {
        break;
    }
    console.log("Hello ");
}

console.log("Continue statement practice");
for (let i = 0; i < 5; i++) {
    if (i == 3) { //skipping 3
        continue;
    }
    console.log("Hello ");
}
