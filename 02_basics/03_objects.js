// There are Two ways to declare objects:- 1) Literal  2) Constructor
// There is no difference in performance/speed whether the object is created with a literal or a constructor.
// The only difference will be that the object created from the constructor will be a singleton.

//Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally. 


//Important Note
// Singleton: when we create an object with constructor Method then it is called Singleton
//way to declare object through Constructor Method- Eg:  Object.create

//Object literals


// ************************************************************
// creating symbol
// You use the Symbol() function to create a Symbol. For example,

// const x = Symbol()
// typeof x; // symbol
// **************************************************************


// **************************************************************
// You can pass an optional string as its description. For example,
// const x = Symbol('hey');
// console.log(x); // Symbol(hey)
// ***************************************************************


// ***************************************************************
// Access Symbol Description
// To access the description of a symbol, we use the . operator. For example,

const x = Symbol('hey');
console.log(x.description); // Symbol(hey)
// ***************************************************************


const mySym = Symbol("key1") //way to declare/create symbol

const JsUser = {
    name: "Veeresh",                  //We can access with (.) notation Eg:- console.log(JsUser.name); //Returns:- Veeresh
    "full name" : "Veeresh Kumar",   //if we write key-value pair in this format we can not access with (.) notation. Eg:- console.log(JsUser["full name"]);  //Returns:- Veeresh Kumar
    [mySym] : "mykey1",             //this is the syntax to define Symbol an we can access through Eg:- console.log(JsUser[mySym]); //Returns:- mykey1
    age : 18,
    location : "Jaipur",
    email : "veeresh44@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["monday", "Saturday"]
}


// **************************************************************************
// Add Symbol as an object
// To access the description of a symbol, we use the . operator. For example,

// let id = Symbol("id");

// let person = {
//     name: "Jack",

//     // adding symbol as a key
//     [id]: 123 // not "id": 123
// };

// console.log(person); // {name: "Jack", [Symbol(id)]: 123} 
// console.log(person[id]);
// ***************************************************************************


//Way to access Values of Object

// console.log(JsUser.name); //Return: Veeresh
//          OR                   //whe we use (.) then we don't need to use (""),but when we use ( [] ) then we need to use ("") because we treat key as a string when we use ( [] ) square bracket.
//console.log(JsUser["name"]) //Return: Veeresh

// console.log(JsUser.isLoggedIn); //Return: False
// console.log(JsUser.lastLoginDays[1]);  //Return: Saturday
// console.log(JsUser["full name"]); //Return: Veeresh Kumar
// console.log(JsUser[mySym]);  //Return: mykey1


//Way to update/Change Values of Object

// JsUser.email = "veereshk456@gmail.com"

// JsUser.age = 20

// console.log(JsUser);  //Return     {
                                //    name: 'Veeresh',
                                //    'full name': 'Veeresh Kumar',
                                //    age: 20,
                                //    location: 'Jaipur',
                                //    email: 'veereshk456@gmail.com',
                                //    isLoggedIn: false,
                                //    lastLoginDays: [ 'monday', 'Saturday' ],
                                //    [Symbol(key1)]: 'mykey1'
                                //   }


//Way to Lock/Freeze the values of Object

// Object.freeze(JsUser) //to freeze/lock the values of Object

// JsUser.email = "veereshk45678@gmail.com"
// console.log(JsUser);



// ************************************************************************

// two symbols with the same description

// const value1 = Symbol('hello');
// const value2 = Symbol('hello');

// console.log(value1 === value2); // false
// value1 and value2 both contain the same description, but they are different.
// *************************************************************************



//Functions in JS

JsUser.greeting = function(){
    console.log("Hello JS User");
    
}

console.log(JsUser.greeting);  //Here function is not executed, only Return function Reference, :-  [Function (anonymous)]

// console.log(JsUser.greeting()); //Return:- "Hello JS User"


//Reference to the name of the "JsUser" object

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //( this ) is used to reference the same object Eg:- name //Return:- Hello JS user, Veeresh
    
}

console.log(JsUser.greeting()); //Return:- "Hello JS User"
console.log(JsUser.greetingTwo()); //Return:- Hello JS user, Veeresh

// ***********************************************************************************




// Benefits of using "Symbol" in Objects

// If the same code snippet is used in various programs, then it is better to use Symbols in the object key. It's because you can use the same key name in different codes and avoid duplication issues. For example,

// let person = {
//     name: "Jack"
// };

// // creating Symbol
// let id = Symbol("id");

// // adding symbol as a key
// person[id] = 12;


// In the above program, if the person object is also used by another program, then you wouldn't want to add a property that can be accessed or changed by another program. Hence by using Symbol, you create a unique property that you can use.