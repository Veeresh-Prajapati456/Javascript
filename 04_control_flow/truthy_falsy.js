// const userEmail = "veer44@gmail.com"
const userEmail = []

if(userEmail){
    console.log("Got user Email");
    
}
else{
    console.log("Don't have user Email");
    
}

//***********************************************************************

// Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// Truthy Values
// "0", "false", " ", [], {}, function(){}


// false == 0  Returns:- true
//false == " " Returns:- true
//0 == " "     Returns:- true

//**********************************************************************

// if(userEmail.length === 0){
//     // console.log("Array is Empty");  Array is Empty
    
// }


const emptyObj ={}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
    
}

//***********************************************************************

//Nullish Coalescing Operator (??):  null, undefined----> sary kahani doo hi keyword ke upar tikki hoti hai 

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

