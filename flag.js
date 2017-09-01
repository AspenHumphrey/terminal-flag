const chalk { bgBlue: blue, bgRed: red, bgWhite: white} = require('chalk');

let shortRowOne = (`${blue(" * * * * * * * ")}${red("                                   ")}`);
let shortRowTwo = (`${blue("  * * * * * *  ")}${white("                                   ")}`);
let longRowOne = (`${white("                                                  ")}`);
let longRowTwo = (`${red("                                                  ")}`);

let star = (String.fromCharCode(0x2606));
let rep = /\*/gi;
shortRowOne = shortRowOne.replace(rep, star);
shortRowTwo = shortRowTwo.replace(rep, star);

// var thirtyFive = "                                  ";

// for (i=0; i<34; i++) {
//     thirtyFiveSpace += thirtyFiveSpace[i];
//   };

console.log(shortRowOne);
console.log(shortRowTwo);
console.log(shortRowOne);
console.log(shortRowTwo);
console.log(shortRowOne);
console.log(shortRowTwo);
console.log(shortRowOne);
console.log(longRowOne);
console.log(longRowTwo);
console.log(longRowOne);
console.log(longRowTwo);
console.log(longRowOne);
console.log(longRowTwo);


