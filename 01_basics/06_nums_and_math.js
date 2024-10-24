const score = 400  // simple way to declare number
// console.log(score); //Output: 400

const balance = new Number(100)  //explicitly definethe type of variable
// console.log(balance); //Output: [Number:100]

// console.log(balance.toString()); // To convert Number into string
// console.log(typeof balance.toString()); //String


// console.log(balance.toString().length);  //To find the length of a string // Return: 3

// console.log(balance.toFixed(2)); //Output: 100.00

const otherNumber = 13.7834
// console.log(otherNumber.toPrecision(3)); //Output: 13.8

// const otherNumber = 132.7834
// console.log(otherNumber.toPrecision(3)); //Output: 133

// const otherNumber = 1123.6834
// console.log(otherNumber.toPrecision(4)); //Output: 1124

// console.log(otherNumber.toPrecision(3)); //Output: 1.12e+3


const hundreds = 1000000
// console.log(hundreds.toLocaleString()); //Output: 1,000,000 (usually these quoma (,) are by default in US standard)

// console.log(hundreds.toLocaleString('en-IN')); //Output: 10,00,000 (in Indian Standard)



//***************************Maths*****************

// console.log(Math); //Math is an Object

// console.log(Math.PI); //these are the values in Object like (PI, SQRT1_2,SQRT2 etc)/ Output: 3.14159265.....

// console.log(Math.SQRT2); //Output: 1.4142135623730...

// console.log(Math.abs(-4)); //absolute value (means to say that convert negative value into positive value) //Return: 4 (always return positive value)

// console.log(Math.round(4.6)); //value rounded to the nearest integer //Return: 5

// console.log(Math.ceil(4.2)); //returns the upper value/ Output:5

// console.log(Math.floor(4.9)); // returns the lower value/Output:4

// console.log(Math.sqrt(9)); // Returns the square root of a number //Return 3

// console.log(Math.pow(5,2)); // returns the power Eg: 25 etc.

// console.log(Math.min(6,3,8,2,5,1)); //retuns the min value from the array //Return: 1

let maxInt = [25,67,33,89,46,38,10]
// console.log(Math.max(...maxInt)); //retuns the max value from the array //Return: 89
//                                   OR
// console.log(Math.max(6,3,8,2,5,1)); //returns the max/largest of the numbers given as input parameters //Return: 8


// console.log(Math.random()); //returns random number between 0 - 1 //  Return: 0.2037750483623748

// console.log((Math.random()*10) +1); //for avoid to return like (0.041, 0.074 etc), so that we only use (+1) so it will Return:   1.3518031390267051, 8.975630948996935 etc

// console.log(Math.floor(Math.random()*10) +1); //if user need single value then we use (Math.floor) with Math.random  and Math.floor roundoff the value and return value (Eg: 7 , 1 , 10, 8 etc)


const min = 10
const max = 20
// console.log(Math.floor(Math.random() * (max - min +1)) +min); //to get the values in the range of min value (min = 10) that we define above, so that we get value from min = 10 to max = 20 , (+ min is written to add min value)