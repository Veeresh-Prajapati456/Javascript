//Function

function sayMyName(){
    console.log("V");
    console.log("E");
    console.log("E");
    console.log("R");
    console.log("E");
    console.log("S");
    console.log("H");
    
}

//sayMyName  //This is called Reference of Function
// sayMyName()  // This is Called Execution, if we want to execute the function


//Add Two Numbers

function addTwoNumbers(num1, num2){   //when we have make the defination of function then it is called Parameters

    console.log(num1 + num2);

}

// addTwoNumbers(10, 20); //when we call the function and pass values in function then it is called Arguments




// addTwoNumbers()         //Return:- NaN
// addTwoNumbers(3, 4)     //Return:- 7      
// addTwoNumbers(3, "4")   //Return:- 34
// addTwoNumbers(3, "a")   //Return:- 3a
// addTwoNumbers(3, null)  //Return:- 3



// function addTwoNumbers(num1, num2){   //when we have make the defination of function then it is called Parameters
   
    // let result = num1 + num2
    // console.log("Veeresh");  //Return:-  Veeresh 
    // return result     //when we return anything we can store into another variable (like: variable name: newResult)
    //        OR
    // return num1 + num2   //with this way we have not need to declare one more new variable
            
    // console.log("Veeresh");  //This line will not Execute //If we want to Execute anything after return it will not execute because it is a rule of function defintion that once you return anything, nothing is return after this

// }

// const newResult = addTwoNumbers(12, 13)
// console.log("Result", newResult);



// function loginUserMessage(username){
//     return`${username} just logged in`
// }

// loginUserMessage() //Here only function is execute, it will not print anything

// console.log(loginUserMessage());            //Return:- undefined just logged in
// console.log(loginUserMessage(""));          //Return:-  just logged in
// console.log(loginUserMessage("Veeresh"));   //Return:- Veeresh just logged in



//if, else
// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please Enter UserName");
//         return
//     }
//     return`${username} just logged in`
// }

// console.log(loginUserMessage());            //Return:- Please Enter UserName



//Another Way to prevent from undefined output
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please Enter UserName");
        return
    }
    return`${username} just logged in`
}

// console.log(loginUserMessage("Veeresh"));    //Return:- Veeresh just logged in
// console.log(loginUserMessage());  // if we will not pass any value, it will print default value which we will given above in the (username = "sam") and if we pass value, it will overwrite the value


//Rest Operator
// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500));  //Return:- [ 200, 400, 500 ]



// //Another Way of Rest Operator
// function calculateCartPrice(val1, val2, ...num1){   //val1 = 200, val2 = 400, ...num1(rest operator) = 500, 2000
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000));  //Return:-  [ 500, 2000 ]



const user = {
    username: "veeresh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)  //Returns:- Username is veeresh and price is 199

handleObject({
    username:"sam",
    price:399
})


const myArray = [200,400, 600, 800, 1000]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArray));  //Return:- 400
//           OR
console.log(returnSecondValue([200,400, 600, 800, 1000]));  //Return:- 400