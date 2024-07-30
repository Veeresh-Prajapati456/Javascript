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
// console.log(typeof valueInNum);
// console.log(valueInNum);


// score = undefined;
// let valueInNum = Number(score);
// console.log(typeof valueInNum);
// console.log(valueInNum);


//To change value from string to Number

let valueInNumber = Number(point)
// console.log(typeof valueInNumber);

// console.log(valueInNumber);

let valInNumber = Number(run)
// console.log(typeof valInNumber);
// console.log(typeof run);
// console.log(valInNumber);

//let valuInNumber=Number(name)
//console.log(typeof (valuInNumber));

//"33" => 33 easily convert in number
//but "33abc" => after conversion it will give output NaN but type is Number
//true => 1
//false => 0

// conversion
let isLoggedIn=1 //output is true
// let isLoggedIn=""    //output is false
// let isLoggedIn="Veeresh"    //output is true
let booleanIsLoggedIn= Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
// console.log(isLoggedIn);
// console.log(typeof booleanIsLoggedIn);


// conversion
//1 => true;
//0 => false
//"" => false
//"veeresh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *********************Operations*********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2); //output: 4
// console.log(2*3); //6
// console.log(2**4); //16
// console.log(2/7); //0.28
// console.log(2%12); //2


let str1 = "Hello"
let str2 = " Veeresh"

let str3 =str1 + str2
// console.log(str3);

// console.log("1" + 2); //output: 12
// console.log(1 + "2"); // 12
// console.log("1" + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(2 + 3 * 2 + 2 + "2"); // 102
// console.log(2 + 4 * 5 + "2"); // 222
// console.log((2 + 4) * 5 + "2"); // 302
// console.log(true); // true
// console.log(+true); // 1
// console.log(+""); // 0


let num1, num2, num3 
num1=num2=num3=2+2


// console.log(num1, num2,num3);

let gameCounter=100
++gameCounter
// gameCounter++

console.log(gameCounter);
