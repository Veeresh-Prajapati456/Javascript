const marvalHeros = ["thor", "Ironman", "spiderman"]
const dcHeros = ["Superman", "flash", "batman"]
const oldHeros = ["shaktiman", "Balvir", "NaagRaj"]

// marvalHeros.push(dcHeros) //It will push Array into array: [ 'thor', 'Ironman', 'spiderman', [ 'Superman', 'flash', 'batman' ] ]  // .push() method push elements into a existing array.  

// console.log(marvalHeros);  //Return- Array in array: [ 'thor', 'Ironman', 'spiderman', [ 'Superman', 'flash', 'batman' ] ]

// console.log(marvalHeros[3][1]); //Return:- flash

// const allHeros = marvalHeros.concat(dcHeros) // there is a limitation in concat, we can give only one value , It is a array specific method and can be used with arrays only.
// console.log(allHeros); //Combines two or more arrays. This method returns a new array without modifying any existing arrays. Eg:- [ 'thor', 'Ironman', 'spiderman', 'Superman', 'flash', 'batman' ]



//                 Spread Operator

// const allnewHeros = [...marvalHeros, ...dcHeros, ...oldHeros] //Spread Operator: Combines two or more arrays - Same as Concat() Method // We can add value as much as you want, It can also be used with the objects.
// console.log(allnewHeros);


const anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11,12,[13,14]],15],16]

// /* Important Note: We can not give "Infinity" in place of depth but this is not a good practice
//  we should always give Exact depth in Numbers Eg: 1 or 2 or any number according to your array depth in- flat() */

// const realanotherArray = anotherArray.flat(Infinity)  //The maximum recursion depth returns a new array with all, flat()- we give depth in the bracket (Eg: 1 or 2 or any number like( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, [ 10, 11 ] ] ) or "infinity" for complete depth, infinity will flat all the array- Eg: for Infinity:- [1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11])
// const realanotherArray = anotherArray.flat(1)
// const realanotherArray = anotherArray.flat(3)
// console.log(realanotherArray); //Returns a new array with all sub array elements concated into it


//Asking a Question that is this is a Array or Not : it will Return value in Boolean : True /False
// console.log(Array.isArray("Veeresh"));  //Return False

// console.log(Array.from("Veeresh"));  //Convert string to an Array Eg:- ['V', 'e', 'e', 'r', 'e', 's','h']


/* Very Important */
// console.log(Array.from({name: "Veeresh"})); //An iterable object to convert to an array, if it not converts in array then it will return an empty array like this- []

//Important Note: we have to always define separately that, to make an array of keys or values, because if we will not define the key or value then it will always return an empty array. Eg:- []


// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3)); //Returns a new array from a set of elements, Eg:- [ 100, 200, 300 ]


const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const oneprint = numbersOne.concat(numbersTwo);
const twoprint =[...numbersOne, ...numbersTwo];

console.log( typeof oneprint);
console.log(typeof twoprint);

console.log(oneprint);
console.log(twoprint);