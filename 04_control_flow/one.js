//if
// const isUserLoggedIn = true

// if(2 === "2"){
//     console.log("executed");
// }

// *******************************************************************

// if(2 != 3){
//     console.log("executed");
// }

// ********************************************************************

// let temperature = 38
// if(temperature <= 40){
//     console.log("Temperature is Normal");
// }
// else{
//     console.log("Today is hot day"); 
// }
// console.log("Program Executed Successfully");

//**********************************************************************

// let score = 200
// if(score>100){
//     let power = "fly"
//     console.log(`User power: ${power}`);    
// }

// console.log(`User power: ${power}`);

// *********************************************************************

// const balance= 1000
// if(balance>500) console.log("test"),    //Implicit Scope
// console.log("test2");                   //Implicit Scope is a Bad Practice
//Implicit Scope means "Let's Suppose"  //we can not write in multiple line in IMplicit Scope but there is a another way for write in multiple iine using comma(,) in the end of line. //This is bad practice

// ********************************************************************

// const balance = 1000

// if(balance < 500){
//     console.log("less than");
    
// }
// else if(balance < 750){
//     console.log("less than 750");
    
// }
// else if(balance < 900){
//     console.log("less than 900");
    
// }
// else{
//     console.log("less than 1200");
    
// }

// *********************************************************************

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to Buy Courses");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
}
console.log("Invalid Details");
