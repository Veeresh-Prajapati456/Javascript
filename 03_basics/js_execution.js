//"Javascript Execution Context" means how JavaScript run/execute whatever file you have create?

// To run/ Execute the program, JavaScript runs/Execute the program in two Phases.

//When we give the code file to the Javascript, first thing is always created that is "Global Execution Context"

//and wherever the global Execution Context will be created it will be referred to "this" variable, and our "Global Execution context" will be kept in "this" variable.


// To run/ Execute the program, JavaScript runs/Execute the program in two Phases.

//  1) Global Execution Context

//  2)Function/Functional Execution Context
        //Every time a function is executed, a new execution context is created for that function called local execution context or function execution context.

//  3)Eval Execution Context (optional) (This is a property of Global execution context in itself)


// Important Note:-
//JavaScript is a single threaded  ( means just one line of code may be run at once) Language


// Imp. Interview Question:
//In Browser the Value of "this" while Global Execution Context is "Window Object"



// Let's suppose we have JavaScript Code and the code will run in two phases.

// 1) Memory Creation Phase/Creation Phase:- In the Memory Creation phase only memory is allocated to the variables and functions. For all variables value stored in memory is undefined and functions are copied in memory

// 2) Execution Phase:-  JavaScript code is executed line by line and it is defining variables in memory here.
//Execution Phase of Code.

let val1=10
let val2=5
function addnum(num1, num2){
    let total=num1 + num2
    return total
}
let result1 = addnum(val1, val2)
let result2 = addnum(10, 2)
console.log(result2);


//First Cycle Of Every Program , it will done in every program.

//step1:- Global Execution/Global Environment (First of all, whatever code has to be run is run from the global executive and it is allocated first inside "this".)   OR   (sab se phele jo bhi code run Karna ho wo global execution se run hota hai aur iss ko sabse phele allocate kiya jata hai "this"ke andar)

//Step2:- Memory Creation Phase/ Memory Phase (In the memory creation phase, all the variables are collected and kept in memory.)
//          val1 => undefined
//          val2 => undefined
//          addnum() => function defination
//          result1 => undefined
//          result2 => undefined


//Second Cycle
//step3:- Execution Phase:
        // val1 => 10
        // val2 => 5
        // addnum                //addnum create separate execute context that is "New variable environment" + "Execution thread"
        // result1 =>15         //Every time when these functions are executed, a new box is created for you and that box is called "New Executional Context" and what happens in this context is, a separate environment of variables complete sand box is created, and a single execution thread is also created in which all your executions take place..
        // result2 =>          //This " New Executional Context" is Deleted once the work has been done

//       new variable Environment
//                  +
//       Execution thread

// addnum:- Memory Phase
//          val1 => undefined
//          val2 => undefined
//          total => undefined

//addnum:- Execution Phase
//          num1 => 10
//          num2 => 5
//          total => 15  (total is return back to the parent execution context or Global Execution Context)



//***********************************************************************

// Call Stack
