// There are Two ways to declare objects:- 1) Literal  2) Constructor
// There is no difference in performance/speed whether the object is created with a literal or a constructor.
// The only difference will be that the object created from the constructor will be a singleton.


//Important Note
// Singleton: when we create an object with constructor Method then it is called Singleton
//way to declare object through Constructor Method- Eg:  Object.create

//Object literals

const mySym = Symbol("key1") //way to declare symbol

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


//Way to access Values of Object

// console.log(JsUser.name);
// console.log(JsUser.isLoggedIn);
// console.log(JsUser.lastLoginDays[1]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


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

