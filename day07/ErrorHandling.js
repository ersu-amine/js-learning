// ReferenceError: numbers is not defined
//console.log(numbers); 
console.log("start of try-catch block");
//no runtime error in javascript like java
//only errors no, exceptions
try{
    console.log(name);
}catch(error){
    console.log("Error occurred: " +  error); //gives error name and simple description
}

console.log("end of try-catch block");


console.log("beginning of second try-catch block"); 
try{
    console.log(value);
}catch(error){
    console.log("Error occurred", error); //gives error description and info where error is
}finally{
    console.log("final touch, always executed");
}

console.log("end of second try-catch block");

