const fs = require("fs");

fs.writeFileSync("../note.txt", "Practice Makes Man Perfect", "utf-8");

console.log("Data Updated");

///////////////////////////////////////////////

const fs_1 = require("fs");

fs_1.writeFile("../note.txt", "Javascript is easy programming language", "utf-8",
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Asyn Data Updated");
        }
    }
);