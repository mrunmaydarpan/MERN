const fs = require("fs");

fs.writeFile(
    "../note1.txt",
    "Javascript is easy programming language Javascript is easy programming language Javascript is easy programming language",
    "utf-8",
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Data Updated");
        }
    }
);

fs.readFile("../note1.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log("From Async method =>" + data);
    }
});