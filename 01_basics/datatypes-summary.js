//  # Primitive DataTypes

    /* 7 Types- String, Number, Boolean, Null, undefined, 

    Symbol(symbol is used to make any value unique),

    BigInt(scientific value or the value which is not covered by (Number dataType)that is very large(big) value) */

    const score = 100
    const scoreValue = 100.3
    const isLoggedIn = false
    const outsideTemp = null
    let userEmail;
    const id = Symbol('123')  //use of Symbol
    const anotherId = Symbol('123')  //use of Symbol

    // console.log(id === anotherId);

    const bigNumber = 3456720838746477n  

    // console.log(typeof bigNumber);





    

//Is JavaScript is Static Or Dynamic Type Language?

/* JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them. */


// Reference (Non-Primitive) DataTypes

// Array, Objects, functions 

//All non primitive datatype is Object

const heros = ["shaktiman", "naagraj", "doga" ];

let myObj = {
    name: "Veeresh",
    age: 22
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros); //typeof (heros) is Object 
console.log(typeof myFunction); //typeof (myFunction) is Object Function




//**************************************************

// Two Types of Memory
//---Stack Memory(In Primitive Stack Memory is used)
//---Whenever Stack Memeory is used then always receive a copy of variable

//---Heap Memory(In Non Primitive(Reference) Heap Memory is used)
//---whenever Heap Memory is used then always receive a reference (original value) of a variable.

let myName = "Ankit"
anotherName = myName
anotherName = "Veeresh"

console.log(myName);
console.log(anotherName);


let userOne ={
    email:"veeresh@gmail.com",
    upi: "veeresh@ybl"
}

let userTwo = userOne

userTwo.email = "veeresh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
