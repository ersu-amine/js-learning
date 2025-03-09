//write a function which is asynch and displays given string 5 times
async function addStringToList(str) {
    let list = [];
    for (let i = 0; i < 5; i++) {
        //promise keyword is optional?
        //return value is made into a promise implicitly
        list.push(str);

    }
    return list;
}

async function name(str) {
    let list = await addStringToList(str);
    console.log(list);
    
}


name("Hello Coffee!");