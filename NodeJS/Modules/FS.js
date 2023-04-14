//File System

const fs = require('fs');

let data = fs.readFileSync('../note.txt', 'utf-8'); //filesto crud operate 
console.log(data);

// console.log("Hello Rocky!");

fs.readFile("../note.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log("From Async method =>" + data);
    }
});

// console.log("Hello Rajsekhar!");