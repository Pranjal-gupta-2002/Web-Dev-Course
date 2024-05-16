const fs = require("fs")

// my own asynchronous function

function abhayReadFile(){
    let p = new Promise(function(resolve){
        console.log("inside read func")
        fs.readFile('text.txt',"utf-8",function(err,data){
            resolve(data);
        })
    })
    return p;
}

//callback function to call

async function main(){
    console.log("before await");
    let value = await abhayReadFile();
    console.log(value);
    console.log("after await");
}
main();
console.log("after main");