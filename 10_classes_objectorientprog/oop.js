//Object Literal: Literally a Object
// An object literal is a short way to create an object. It consists of key-value pairs enclosed in curly braces ({}).

// const user = {
//     username:"Veeresh",
//     loginCount: 8,
//     signedIn: true
// }

// console.log(user.username, user.loginCount);

// *******************************************************************
const user = {
    username:"Veeresh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user detail from database");
        console.log(`Username: ${this.username}`);   //Returns:- Username: Veeresh

        console.log(this);

// Returns:- const user = {
//             username:"Veeresh",
//             loginCount: 8,
//             signedIn: true
//         }
                
        
    }
}

// console.log(user.username, user.loginCount);  
// console.log(user.getUserDetails());
// console.log(this);   //Returns:- {}

// **********************************************************************

// Constructor Function

// const PromiseOne = new Promise()  //This ( new ) is a constructor function
// const date = new Date()    //This ( new ) is a constructor function

// what does constructor function do?
// It allows to create a multiple instance with a one/single object literal.

// ********************************************************************

function User(username, loginCount, isLoggedIn){
    this.username = username; 
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn     //left hand side wala variable hai and right hand side wala value hai jo aap pass kar ke de rehe ho  //this is an object and we put value inside in it.

    return this //it is by default, if we not write this line it will also run , but to write this line is a good practice
}

const userOne = new User("veeresh", 12, true)
// const userTwo = User("Amit", 13, false)     //userTwo will overwrite the value(means userOne value is not print) and this is not good, then we need to do is use ( new (means constructor function)) in front of these "user" so that they both act as different 

const userTwo = new User("veeresh", 12, true)

// Constructor function gives a new instance/copy every time, it will not affect the orignal one.
console.log(userOne);
console.log(userTwo);

// Mechanism of "new" Keyword
/* 
step 1: when we use "new" keyword, an empty object ( {} ) is created and we say that object is 'instance'

step 2: a constructor function is call because of "new" keyword, and Now what it does is, it packs all your arguments etc. and gives it to you.

step 3: all the arguments etc. are inject/add in "this" keyword

step 4: And in the 4th step you get inside the function

*/

// ******************************************************************

function User(username, loginCount, isLoggedIn){
    this.username = username; 
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn   

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this 
}

const userOne1 = new User("veeresh", 12, true)

const userTwo2 = new User("veeresh", 12, true)

// Constructor function gives a new instance/copy every time, it will not affect the orignal one.
// console.log(userOne);
console.log(userOne1.constructor);  //Returns:- [Function: User]
console.log(userTwo2);



