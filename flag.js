const chalk = require('chalk');

let blue = chalk.bgBlue;
let red = chalk.bgRed;
let white = chalk.bgWhite;

let smallOne = (`${blue(" * * * * * * * ")}${red("                                   ")}`);
let smallTwo = (`${blue("  * * * * * *  ")}${white("                                   ")}`);
let bigOne = (`${white("                                                  ")}`);
let bigTwo = (`${red("                                                  ")}`);

let star = (String.fromCharCode(9733)); //0+2606 //0x2606
let rep = /\*/gi;
smallOne = smallOne.replace(rep, star);
smallTwo = smallTwo.replace(rep, star);

// var thirtyFive = "                                  ";

// for (i=0; i<34; i++) {
//     thirtyFiveSpace += thirtyFiveSpace[i];
//   };

console.log(smallOne);
console.log(smallTwo);
console.log(smallOne);
console.log(smallTwo);
console.log(smallOne);
console.log(smallTwo);
console.log(smallOne);
console.log(bigOne);
console.log(bigTwo);
console.log(bigOne);
console.log(bigTwo);
console.log(bigOne);
console.log(bigTwo);


