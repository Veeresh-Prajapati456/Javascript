//Important Interview Question
//What is the Globel Object in Browser?
//Answer:-  Window Object
//this:- means what Current context(current values/variables) hold.

const user = {
    username: "veeresh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()      // Return:- veeresh, welcome to website
                              //          {
                              //            username: 'veeresh',
                              //            price: 999,
                              //            welcomeMessage: [Function: welcomeMessage]
                              //          }
                                                        

// user.username = "Ankit" //Here current context is changed from "Veeresh" to "Ankit", contect means what values hold variable is?
// user.welcomeMessage()      // Return:-  Ankit, welcome to website
                              //          {
                              //            username: 'Ankit',
                              //            price: 999,
                              //            welcomeMessage: [Function: welcomeMessage]
                              //          }
                             


// console.log(this); //Return:- Empty Object:-  {} because there is no context in global scope.




//***********************************************************************


// function  chai(){
//   let username = "veeresh"
//   console.log(this);    //Return Global Object with Some Information
  
// }
// chai()


// function  chai(){
//   let username = "veeresh"
//   console.log(this.username);  //Return:- Undefined, because we can not use ( this.username ) (username:- current context) inside the function, it will not work in function.  // this .current_context work in object 
  
// }

// chai()



// Another way to write function 

// const chai = function(){
//   let username = "veeresh"
//   console.log(this.username);
  
// }
// chai()


//ARROW FUNCTION
const chai = () => {
  let username = "veeresh"
  console.log(this);    //Return:- Empty Object:- {}  
}
chai()

// INTERVIEW QUESTION IMPORTANT:-  Difference between Simple Function and Array Function  with using "this" Keyword.

// SIMPLE FUNCTION:- In the simple function after use of "this" it will return Global Object with some info.

// Example:

          // function  chai(){
          //   let username = "veeresh"
          //   console.log(this);    //Return Some Information
  
          // }
          // chai()


// ARROW FUNCTION:- In the Arrow function after the use of "this" Keyword it will return Empty Object {}

// Example:
          // const chai = () => {
          //   let username = "veeresh"
          //   console.log(this);    //Return:- Empty Object:- {}
            
          // }
          // chai()
// 


// Arrow Function
// This way is called "Explicit Return" because we use "return" in it means (" return" alag se lagana pad raha hai)
// const addTwo = (num1, num2) => {    //If we use Curly Braces the we have to use "return" in the below line
//   return num1 + num2
// }
// console.log(addTwo(3, 5));  //Return:- 8



// Another Way of Arrow function
// This is Known as Implicit Return :- In Arrow Function
// Implicit Return means let suppose(mai maan leta hu ki hume "return" likhne ki jarurat nahi hai)

// const addTwo = (num1, num2) => num1 + num2

// console.log(addTwo(3, 5));  //Return:- 8

//              OR

// Another Way of Arrow function
// This way is called "Implicit Return" because we can't use "return" in it.
// const addTwo = (num1, num2) => (num1 + num2)   //If we wrap in parenthesis " () " then we have no need to use "return" in the below line. //This concept is mostly used in React

// console.log(addTwo(3, 5));  //Return:- 8


// Benefits of using "Implicit Return" or Parenthecis.:- Arrow Function
const addTwo = (num1, num2) => ({username : "veeresh"})   //Return:- { username: 'veeresh' }  //If we want to return Object we need to wrap in parenthecis because we will not wrap in parenthecis then then it will return:- "undefined" Eg:- const addTwo = (num1, num2) => {username:"veeresh"} it will return undefined, because we can't return object in function in this way

console.log(addTwo(3, 5));  




