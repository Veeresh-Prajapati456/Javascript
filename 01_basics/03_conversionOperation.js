let score = 33
let point = "45abc"
let run = null
let name = "Veeresh"


//There are two ways to check the dataType of variable
console.log(typeof score);
/*         OR           */
// console.log(typeof (score));

//To change value from string to Number

// let valueInNumber = Number(point)
// console.log(typeof valueInNumber);

// console.log(valueInNumber);

// let valInNumber = Number(run)
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
console.log(booleanIsLoggedIn);
console.log(isLoggedIn);
console.log(typeof booleanIsLoggedIn);


// conversion
//1 => true;
//0 => false
//"" => false
//"veeresh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);