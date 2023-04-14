const OS = require('os');
console.log(OS.cpus()); //used to get CPU info
console.log(OS.totalmem());  //used to get total RAM size
console.log(OS.freemem()); //to get available memory in RAM
console.log(OS.arch()); //to get CPU architecture