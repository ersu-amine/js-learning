//repetable code fragment
//function outside of class, mehtod inside of class

//for reusability
//independent of class like the method

//create function
//cannot declare the return type
function displayNumber(){
    console.log(3);
}

//call the function
displayNumber();

function login(username, password){
    console.log(`User ${username} is trying to login with password ${password}`);
    console.log(`User has logged in successfully`);
    return true;
}

console.log(login("admin", "admin123"));

console.log(login());//parameters will display as undefined
//javascript doesn't give error if the parameters are not passed
//this issue fixed in typescript