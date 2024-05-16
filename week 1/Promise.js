const fs = require("fs")

// my own asynchronous function

function abhayReadFile(){
    console.log("inside abhayreadfile");
    return new Promise(function(resolve){
        console.log("inside promise");
        fs.readFile('text.txt',"utf-8",function(err,data){
            console.log("before resolve");
            resolve(data);
        })
    })
}

//callback function to call
function onDone(data){
    console.log(data);
}

abhayReadFile().then(onDone)

console.log("after abhayreadfile");