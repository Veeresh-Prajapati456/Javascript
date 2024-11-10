//Array

const myArr = [11, 12, 13 , 14 ,15, 16]
const myHeroes = ["Balvir", "Shaktiman", "NaagRaj"]
const myArr2 = new Array(22, 23, 24, 25, "One", "Two", "Three", true) //  Storing a collection of multiple items under a single variable name is known as Array

// console.log(myArr[2]);
// console.log(myHeroes[0]);
// console.log(myArr2[5]);

//Array Methods

// myArr.push(17) //With the use of ( Push(value)) method, we Always insert the element in the End of Array
// myArr.push(18)
// myHeroes.push("Balvir")
// myHeroes.push("Hulk")
// myArr2.push(true)
// myArr2.push(25.5)
// console.log(myArr, myHeroes, myArr2);
// console.log(myHeroes);


// myHeroes.pop() //With the use of ( pop()) method, we always delete the element from the end of Array
// myArr2.pop()
// console.log(myArr2, myHeroes);


// myArr.unshift(10) //With the use of( unshift(value)) method, we always insert the element in the begining of the array
// myHeroes.unshift("Hulk")
// myArr2.unshift(20)
// console.log(myArr, myHeroes, myArr2);

// myArr.shift() //With the use of(shift(value)) method, we always delete the element in the begining of the array
// myHeroes.shift()
// myArr2.shift()
// console.log(myArr, myHeroes, myArr2);


// console.log(myArr.includes(13)); //"includes()" Method Return Boolean Value (True/ False) , Return "true" if given/asked value is available and vice-versa

// console.log(myHeroes.indexOf("Balvir")); // "indexOf()" method Return "index no." (eg: 0) if given/asked Value is present in an array

// console.log(myHeroes.indexOf(21)); //"indexOf()" method Return " -1 " if given/asked Value is not present in an array, " -1 " means "I Don't Konw"



// console.log(myArr); //Return Array: [ 11, 12, 13, 14, 15, 16 ]
// console.log(typeof myArr); //Return the (typeof myArr)  is "Object"

const newArr = myArr.join() // join() returns an array as a string. 
// console.log(newArr); //Return Bind Array with Comma(,) seprated:   11,12,13,14,15,16
// console.log(newArr); //Return the (typeof newArr)  is "String" 



//slice, splice

// Important Notes: Diff. Slice vs Splice

// Slice will not manupulate the Original Array
//splice will manupulate the Original Array



//********************Slice()*************************************

// console.log("A", myArr); //Return  A [ 11, 12, 13, 14, 15, 16 ]

// const mynewArr1 = myArr.slice(1, 3) // (index no. "1" is inclided and index no. "3" is exclude
//Slice will not manupulate the Original Array, 

// console.log(mynewArr1); //Return   [ 12, 13 ]
                            
// console.log("B", myArr); //Return   B [ 11, 12, 13, 14, 15, 16 ]



//***********************Splice()*********************************

/*The splice() method is used to change an array by adding, removing, or replacing elements. This method modifies the original array.*/

// const mynewArr2 = myArr.splice(1, 3) //(index no. "1" is inclided and index no. "3" is also included

// console.log("C", myArr); //Return  C [ 11, 15, 16 ]

// console.log(mynewArr2); //Return   [ 12, 13, 14 ]



//The splice() method is used to change an array by adding.
// const arr = ["walk the dog", "go shopping", "exercise"];
// const index = 2;
// const value = "go to the pharmacy";
// arr.splice(index, 0, value);  // "index" means index at which to start changing the array, "0" means deleteCount, "value" means content which you want to insert/add in an array

// console.log(arr); // "walk the dog", "go shopping", "go to the pharmacy", "exercise"



/* If you don’t want to modify the original array, you can also make a copy of the array before using the splice() method: */

// const arr = ["walk the dog", "go shopping", "exercise"];
// const arrCopy = [...arr];
// const index = 2;
// const value = "go to the pharmacy";
// arrCopy.splice(index, 0, value);



// const arr = ["walk the dog", "go shopping", "exercise"];
// const arrCopy = [...arr];
// const index = 2;
// const value = "go to the pharmacy";
// arrCopy.splice(index, 1, value); //elemnt is deleted at the end
// console.log(arrCopy); // Output:- [ 'walk the dog', 'go shopping', 'go to the pharmacy' ]


// console.log(arrCopy); // "walk the dog", "go shopping", "go to the pharmacy", "exercise"
// console.log(arr); //Return Original Array


//**************************************************************************************/

/* Shalow Copy:-  A shallow copy creates a new object or array and inserts references to the original elements found in the source.
  In other words, If the original object has nested objects (objects inside objects), the references (pointers) to those nested objects are copied,
  not the actual data. So, any changes in the nested objects affect both the original and the copied object. */
  
 // Example of Shallow copy:

//  const original = {
//     name: 'John',
//     age: 30,
//     address: {
//         city: 'New York',
//         country: 'USA'
//     }
// };

// // Creating a shallow copy
// const shallowCopy = { ...original };

// // Modifying the nested object in shallow copy
// shallowCopy.address.city = 'San Francisco';

// console.log(original.address.city); // Output: San Francisco

//*****************************************************************************************/


/* Deep Copy:-  A deep copy duplicates an entire object or array, including all levels of nested objects. 
  Changes to nested objects in a deep copy don’t affect the original object. */

// Example of Deep copy:

// const original = {
//     name: 'Alice',
//     age: 25,
//     address: {
//         city: 'London',
//         country: 'UK'
//     }
// };

// // Creating a deep copy using JSON methods
// const deepCopy = JSON.parse(JSON.stringify(original));

// // Modifying the nested object in deep copy
// deepCopy.address.city = 'Manchester';

// console.log(original.address.city); // Output: London

//***************************************************************************************

// let employee = {
// 	eid: "E102",
// 	ename: "Jack",
// 	eaddress: "New York",
// 	salary: 50000
// }

// console.log("Employee=> ", employee);
// let newEmployee = employee; // Shallow copy
// console.log("New Employee=> ", newEmployee);

// console.log("---------After modification----------");
// newEmployee.ename = "Beck";
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);

// Name of the employee as well as 
// newEmployee is changed.
