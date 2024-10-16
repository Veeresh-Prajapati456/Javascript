"use strict";  //treat all JS code as newer version of Javascript

//alert(3+3)  //we are using nodejs, not browser because in browser "console" if we write- alert(3+3) then pop will show with the addition of given number that is- 6

console.log(3+7); //it will print 10


//Primitive/ In-built DataTypes

let name = "Aman"
let age = 18
let isLoggedIn = false
let state = null
let city;


//Primitive/ In-built DataTypes

/* 
number--- 2 to the power 53 approx

bigint

string

boolean

null-----empty value(standalone value)  // null is a representation of empty value

undefined----value is not assign

Symbol----unique(Example--used in React and also used to find unique components which is in react, also used in figma, to define individual or unique component

*/


//to check the type of variable 
console.log(typeof age);  ///it will return the type of (age) as "number" because we declare number to the age variable
/*          OR          */
//to check the type of value
console.log(typeof "Veeresh");


console.log(typeof null);  //it will return the typeof (null) as object

console.log(typeof undefined);  //it will return the typeof (undefined) as undefined