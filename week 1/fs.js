// read the file locally

const fs = require("fs");

fs.readFile("text.txt", "utf-8", function (err, data) {
  console.log(data);
});

console.log("hello world1");

let a = 0;
for (let i = 0; i < 100000000; i++) {
  a++;
}

console.log("Hello world2")  // thread will go to the pending callback after the lower synchronous task has been done
