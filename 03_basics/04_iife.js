// Immediately Invoked Function Expressions (IIFE)
// means jase hi aap ne function likha wase hi usko turant execute karwana hai.

// function chai(){
//     console.log("DB CONNECTED");
    
// }
// chai()  //Return:- DB CONNECTED

// Important Interview Question:
// What is IIFE
// Answer:- Global scope ke pollution se problem hoti hai kai baar tho uss global scope ke jo bhi variables hai ya jo bhi waha declaration hai uske pollution ko hatne ke liye hamne IIFE ka use kiya hai.
//    OR
//Answer:- When there is a problem of pollution of global scope, we have used IIFE to reduce the pollution of whatever variables there are of global scope or whatever declaration there is.


// Named IIFE (Immediately Invoked Function Expressions)
(function chai(){     //Reason why we call named IIFE because it has name:- chai()
    console.log(`DB CONNECTED`);  //Return:- DB CONNECTED
    
}) ();  //when we have to write two IIFE together always use semi-colon " ; " in the end , this is mendatory because when IIFE(Immediately Invoked Function Expressions) is invoked, but they did not actually know when to stop the context. so, in this situation in javascript we have to end the line, and to end the line we have to need semi-colon ";" otherwise it will throw an Error((intermediate value)(...) is not a function) when we write two IIFE in one file


//Unnmaed IIFE:- Arrow Function
( (name) => {          //Reason why we call Unnamed IIFE because it has no name  // "name" is the parameter
    console.log(`DB CONNECTED TWO ${name}`);  //Return:- DB CONNECTED TWO
    
}) ("veeresh");  //"veeresh" is argument



//Interview Question:
//Write Named IIFE and Unnamed IIFE 
//How to write two IIFE together  OR  How to write two IIFE in One File 
//Answer:- When we Write two IIFE together or in one file, we have to always use semi-colon (;) in the end of IIFE.

//How to pass parameter in the IIFE
// This question solution explained in UNnamed IIFE

// **********************************************************************


// Understand Syntax of IIFE in Simple Way

// () ()    //first parenthesis is forfunction defination, and second parenthesis is for execution call


// *********************************************************************





//How to write two IIFE together  OR  How to write two IIFE in One File.

// (function chai(){
//     console.log(`DB CONNECTED`); //Return: DB CONNECTED
// }) ();

// (function snack(){
//     console.log(`DB CONNECTED TWO`); ////Return: DB CONNECTED TWO
// }) ()


//            OR


// (function chai(){
//     console.log(`DB CONNECTED`); //Return: DB CONNECTED
// }) ();

// ( () => {    //Arrow function without Name
//     console.log(`DB CONNECTED TWO`); ////Return: DB CONNECTED TWO
// }) ()


//             OR


// (function chai(){
//     console.log(`DB CONNECTED`); //Return: DB CONNECTED
// }) ();

// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`); ////Return: DB CONNECTED TWO
// }) ("veeresh")