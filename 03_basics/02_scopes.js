let a = 400
const b = 500
var c = 600         //Global Scope

if(true){
    let a = 10      //Block Scope
    const b = 20    //Block Scope
    // var c = 70      //Global Scope

    // console.log(`Inner: a = ${a} and b = ${b} and c = ${c}`);  //Return:- Inner: a = 10 and b = 20 and c = 600
    
}

// console.log(a);  //Return:- 400
// console.log(b);  //Return:- 500
// console.log(c);  //Return:- 600

//*********************************************************************/

function one(){
    username = "Veeresh"

    function two(){
        website = "youtube"
        // console.log(username);   //Return:- Veeresh
    }
    // console.log(website);   //Error Line
    two()
    
}
one()





if(true){
    const username = "Veeresh"

    if(username === "Veeresh"){
        const website = " YoutTube"
        // console.log(username + website);  //Return:- Veeresh YoutTube
        
    }
    // console.log(Website);   //Error Line
    
}
// console.log(username);    //Error Line


//***********************************************************************/

//Way to create function
// function addone(num){
//     return num + 1
// }
// addone(5)

//********************************************************* */

//Hoisting: In JavaScript, hoisting is a behavior in which a function or a variable can be used before declaration.

console.log(addone(5));  //To print
// OR
addone(5)               //This is called Hoisting, in this case if we ( console.log(addone(5)) ) then it will run properly and return a value that is ( 6 ) which is correct. But in the below case if we do like this then it will throw an error
function addone(num){
    return num + 1
}




//Another way to create Function
// const addTwo = function(num){
//     return num + 2
// }
// addTwo(5)


addTwo(5)                       //In this case if we do ( console.log(addTwo(5)) ) then it will return an error that is:- ( Cannot access "addTwo" before initialization ), we can not use/access function before declaration in this case
const addTwo = function(num){    //Error: Cannot access 'addTwo' before initialization.
    return num + 2
}