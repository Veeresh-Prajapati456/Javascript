let score = 33
let point = "45abc"
let run = null
let name = "Veeresh"


//There are two ways to check the dataType of variable
// console.log(typeof score);
/*         OR           */
// console.log(typeof (score));


//if  we assign value(null, undefined) to variable then what happen, let see

// score = "veeresh";
// let valueInNum = Number(score);
// console.log(typeof valueInNum);  //return Number
// console.log(valueInNum);   // return NaN


// score = null;
// let valueInNum = Number(score);
// console.log(typeof valueInNum);  //Return Number
// console.log(valueInNum);         // Return 0


// score = undefined;
// let valueInNum = Number(score);
// console.log(typeof valueInNum);  //Return Number
// console.log(valueInNum);         // Return NaN


//To change value from string to Number

// let valueInNumber = Number(point)
// console.log(typeof valueInNumber); //Return Number
// console.log(valueInNumber);        // Return NaN


// let valInNumber = Number(run)
// console.log(typeof valInNumber);  // Return Number
// console.log(typeof run);          // Return Object
// console.log(valInNumber);         // Return 0


// let valuInNumber=Number(name)
// console.log(typeof (valuInNumber));    //Return Number
// console.log(valuInNumber);            // Return NaN


//"33" => 33 easily convert in number
//but "33abc" => after conversion it will give output "NaN", because it is not a pure number, but type is Number
//true => 1
//false => 0

// conversion
let isLoggedIn= 1             //output is true
// let isLoggedIn= "Veeresh" //output is true
// let isLoggedIn= ""       //output is false
// let isLoggedIn= 0       //output is false

let booleanIsLoggedIn= Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);          //Return true
// console.log(isLoggedIn);                // Return 1
// console.log(typeof booleanIsLoggedIn); // Return boolean


// conversion
//1 => true;
//"veeresh" => true
//0 => false
//"" => false


let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);           //Return 33
// console.log(typeof stringNumber);   // Return String


// *********************Operations*********************

let value = 3
let negValue = -value
// console.log(negValue);  //Output: -3


// console.log(2+2); //output: 4
// console.log(2*3); //6
// console.log(2**4); //16
// console.log(2/7); //0.28
// console.log(2%12); //2


let str1 = "Hello"
let str2 = " Veeresh"

let str3 =str1 + str2
// console.log(str3);

// console.log("1" + 2); //output: 12   //c
// console.log(1 + "2"); // 12
// console.log("1" + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32   // if string is in last then 
// console.log(2 + 3 * 2 + 2 + "2"); // 102
// console.log(2 + 4 * 5 + "2"); // 222
// console.log((2 + 4) * 5 + "2"); // 302
// console.log(true); // true
// console.log(+true); // 1   //This is bad practice
// console.log(+""); // 0
// console.log(""); // print (Blank Space)
// console.log(false); // false
// console.log(+false); // 0  // This is bad practice


let num1, num2, num3 
num1=num2=num3=2+2   //this is bad practice to assign the value in this way (2 + 2), we can simply write 4
// console.log(num1, num2,num3);


let gameCounter=100
++gameCounter
// gameCounter++

console.log(gameCounter);
