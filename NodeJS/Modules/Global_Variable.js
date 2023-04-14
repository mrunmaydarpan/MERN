console.log("---- current path => " + __dirname);
console.log("---- current file path => " + __filename);


const fs = require("fs");
const { join } = require("path");

fs.readFile(join(__dirname, "..", "note1.txt"), "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log("From Async method =>" + data);
    }
});
