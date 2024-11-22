// Map

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map(  (num) => num + 10)
// console.log(newNums);  //Return:- [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


// **********************************************

// solving above problem with forEach 

// const myNums = []

// myNumbers.forEach(  (num) => {
//     myNums.push(num + 10)
// } )

// console.log(myNums);  //Return:- [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// **********************************************************
// Chaining: It's mean we can use together  2-3 methods directly like map, filter etc
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

// Return:- [41, 51, 61, 71, 81, 91, 101]
