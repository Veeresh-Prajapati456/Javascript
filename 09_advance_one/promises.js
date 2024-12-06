//A Promise is an Object in JavaScript.
// Imp: Promise always completes in Future.

// What is Promise?

//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//         OR

// A Promise represents the future result of an asynchronous operation. It acts as a placeholder for the value that will eventually be available, whether the operation succeeds or fails.


/* States of a Promise:

-- Pending:   The operation has started but is not yet finished.
-- Fulfilled: The operation completed successfully, and a result is available.
-- Rejected:  The operation failed, and an error is available.



Why Use Promises?

-- To handle asynchronous tasks (e.g., fetching data from a server) in a cleaner and more manageable way.
-- To avoid "callback hell" caused by deeply nested callback functions.



How to Handle Promises?

.then() is used when the operation is successful.
.catch() is used when the operation fails.
.finally() runs after the operation finishes, regardless of success or failure.

*/

/* Imp. Interview question in Promise:-

Ques:- You made a request from Promise and it returned an error code (Error 404) so ​​will you get it in Resolve or Rejected

Ans:- You will always get it as a response, there is no error, you will get the error only when you request the browser. You will get the error only in that case

*/


// **********************************************************************

/* Real-Life Use Case of States of Promises:

 Imagine you're ordering pizza:
-- Pending:    The pizza is being prepared.
-- Fulfilled:  The pizza is delivered.
-- Rejected:   The pizza couldn't be delivered due to some issue.

*/


// Code:-

// const orderPizza = new Promise((resolve, reject) => {
//   let isDelivered = true;

//   if (isDelivered) {
//     resolve("Pizza delivered!");
//   } else {
//     reject("Pizza delivery failed!");
//   }
// });

// orderPizza
//   .then((message) => console.log(message)) // If successful
//   .catch((error) => console.error(error)); // If failed

// **********************************************************************

// way to create promise and store in a Variable
// const promiseOne = new Promise(function(resolve, reject){    //resolve connection is directly with .then()
//     //Do an async task
//     //DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is complete.');
//         resolve()     // if we want to connect the resolve and . then() method then we have to call resolve() method
//     },1000)
// })

// //way to consume promise
// promiseOne.then(function(){    //here all value is return
//     console.log('Promise consumed.')
// })


/* Returns:- 
ASync task is complete.
Promise consumed
*/

//***********************************************************************

// Another Way to create Promise

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve()
//     },1000)
// })

// .then(function(){     //here all value is return
//     console.log('Async 2 resolved');
    
// })


/* Returns:-
Async task 2
Async 2 resolved
*/

// *********************************************************************
// Way to pass data in resolve
// const PromiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email:"chai@example.com"})    //we can pass data in resolve in parameters //we can pass any thing like object, array, function etc
//     },1000)
// })

// PromiseThree.then(function(user){   //if we can say that resolve and .then () are connected, then we can expect that 'by default' we receive data here, so we can say that we have named that object (user)
//     console.log(user);     
// })

// Returns:- {username: 'Chai, email: 'chai@example.com}

// ******************************************************************

// Handle Promise with .then()

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({
//                 username: "Veeresh", passwrd: "1234"
//             })
//         } else{
//             reject('ERROR: Something Went Wrong')
//         }
//     },2000)
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) =>{
//     console.log(username);          /*if we want to get the data 
//                                     (means user.username) then we do chaning mean we have to write one more time .then(). (means the value return from above .then() come in below .then() ).  This will use in database Connection  */
    
// }).catch(function(error){
//     console.log(error);
    
// }).finally(() => {     //.finally() method will runs always after the operation finishes, inspite of success or failure.
//     console.log('The Promise is either resolve or reject');
    
// })       

// Returns:- ERROR: Something Went Wrong

// ********************************************************************

// const promiseFourr = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({
//                 username: "Veeresh", passwrd: "1234"
//             })
//         } else{
//             reject('ERROR: Something Went Wrong')
//         }
//     },2000)
// })

// promiseFourr.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) =>{
//     console.log(username);          /*if we want to get the data 
//                                     (means user.username) then we do chaning mean we have to write one more time .then(). (means the value return from above .then() come in below .then() ).  This will use in database Connection  */
    
// }).catch((error) => {
//     console.log(error);
    
// }).finally(() => {     //.finally() method will runs always after the operation finishes, inspite of success or failure.
//     console.log('The Promise is either resolve or reject');
    
// })   

/* Returns:- 
{ username: 'Veeresh', passwrd: '1234' }
Veeresh
*/

// *********************************************************************

// Handle promise with Async/Await

// const promiseFive = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         let error = true
//         if(!error){
//             resolve({username:"JavaScript", password:"456"})
//         } else{
//             reject("ERROR: JS went Wrong")
//         }
//     },1000)
// })

// // async/await will wait for the work to be done so that move forward and  if work not done it will throw an error (This approach uses in database connection means(if database connection failed then we did not move forward ))

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive   //way to consume promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// consumePromiseFive()  //Function Execute

// Returns:- ERROR: JS went Wrong

// *********************************************************************

const promiseFivee = new Promise( (resolve, reject) => {
    setTimeout( () => {
        let error = false
        if(!error){
            resolve({username:"JavaScript", password:"456"})
        } else{
            reject("ERROR: JS went Wrong")
        }
    },1000)
})

// async/await will wait for the work to be done so that move forward and  if work not done it will throw an error (This approach uses in database connection means(if database connection failed then we did not move forward ))

async function consumePromiseFivee(){
    try {
        const response = await promiseFivee  //way to consume promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFivee()  //Function Execute

// Returns:- { username: 'JavaScript', password: '456' }

// *******************************************************************

// get response(data) from APIs using trycatch

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')  
//         const data = await response.json()
//             console.log(data);
//     } catch (error){
//         console.log("Error Occured", error);
//     }
// }

// getAllUsers()

/* Returns:-

[
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: [Object]
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: [Object]
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains'
    }
  }
]

*/

// *******************************************************************

// get response(data) from APIs using .then

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response.json()    //for response
}).then( (data) => {
    console.log(data);
    
})
.catch( (error) => {                   //for Error
    console.log("Error Thrown", error);   
})

/* Returns:-

[
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: [Object]
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: [Object]
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains'
    }
  }
]

*/

// ********************************************************************

// How fetch works Behind the scene.
// firstly fetch comes in only browser but fetch API is finally coming in Nodejs

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response.json()    //for response
}).then( (data) => {
    console.log(data);
    
})
.catch( (error) => {                   //for Error
    console.log("Error Thrown", error);   
})
