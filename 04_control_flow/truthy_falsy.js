const userEmail = "veer44@gmail.com"
// const userEmail = "0"

// const userEmail = []

if(userEmail){
    console.log("Got user Email");
    
}
else{
    console.log("Don't have user Email");
    
}

//**********************************************************************

// Truthy Values
// "0", "false", " ", [], {}, function(){}


// Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// false == 0  Returns:- true
//false == " " Returns:- true
//0 == " "     Returns:- true

//**********************************************************************

// To check/detect Array is Empty or Not.

// if(userEmail.length === 0){
//     // console.log("Array is Empty");  Array is Empty
    
// }


// To check/detect Object is Empty or Not.

// const emptyObj ={}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is Empty");
    
// }

//***********************************************************************

//Nullish Coalescing Operator (??):
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
// null, undefined----> sarry kahani doo hi keyword ke upar tikki hoti hai 

let val1;
// val1 = 5 ?? 10     //Return:- 5

// val1 = null ?? 10   //Return:-  10     //to prevent from null, undefined value, we use (??) and give true value or flag value

// val1 = undefined ?? 15  //Return:-  15

val1 = null ?? 10 ?? 20    //Return:- 10
 

console.log(val1);

// **********************************************************************

// Ternary Operator
// Syntax:-   condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");  //Return:-  more than 80
;

