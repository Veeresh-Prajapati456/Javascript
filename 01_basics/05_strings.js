// Two ways to declare String
//First Way

let name = "Veeresh"
const repoCount = 50

// console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

// //               OR

// console.log(`Hello my name is ${name.toUpperCase()} and my repo Count is ${repoCount}`);


//Second Way to declare String
// let gameName = new String("Veeresh")
let gameName = new String("Veeresh-Kumar-Prajapati")
// console.log(gameName);

// console.log(gameName[0]); // use to access key value Pair
// console.log(gameName.__proto__); //to access prototype

// console.log(gameName.length); //to print the length
// console.log(gameName.toUpperCase()); //method/Functions
// console.log(gameName.charAt(4)); //charater at particular index/position
// console.log(gameName.indexOf("h")); //to check character at which index no./position

const newString = gameName.substring(0,5) //start number (0), end Number (5)
//we can not use negative value in substring
//output: Veere
console.log(newString);

const anotherString = gameName.slice(-10,9)  //we can use negative value as well as positive value
//Output: ereshK 
console.log(anotherString);


const newStringOne = "  veeresh  Kumar  "
console.log(newStringOne);
console.log(newStringOne.trim()); //remove space from start and end
console.log(newStringOne.trimEnd()); //remove space from end
console.log(newStringOne.trimStart()); //remove space from start

const url = "https://veeresh.com/home%20page"
console.log(url.replace("%20" , "_"));  //use to replace one character with another character

console.log(url.includes("veeresh")); // use to find any particular character/thing

console.log(gameName.split("-")); //split on the basis of ("-") and convert into array form Example['Veeresh', 'Kumar', 'Prajapati']




