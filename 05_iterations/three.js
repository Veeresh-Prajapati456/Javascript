//for of loop

// ["", "", ""]   Array in JS
// [{}, {}, {}]   Object in JS

// ***************************************************

// Syntax of " forof " Loop

// for (const element of object) {

// }

// ***************************************************
const arr = [1, 2, 3, 4, 5]

for (const num of arr){
    // console.log(num);
    
}

// ****************************************************

const greetings = "Hello World!"

for(const greet of greetings){
    // console.log(`Each char is ${greet}`);
    
}

// *******************************************************

// const greetings = "Hello World!"

// for(const greet of greetings){
//     if(greet==" "){
//         // continue;
//         break;
            
//     }
//     console.log(`Each char is ${greet}`);
    
// }

// *******************************************************

// Maps:

// Map is a Object.
// Map Will always return Unique value ( means it will not hold same values)
// The Map object holds key-value pairs and remembers the original insertion order of the keys.


const map2 = new Map()
map2.set('IND', "India")
map2.set('USA', "United state of America")
map2.set('JPN', "Japan")

// console.log(map2);  //Returns:- Map(3) {
                              //  'IND' => 'India',
                             //   'USA' => 'United state of America',
                            //    'JPN' => 'Japan'
                            //  }
                            // console.log(typeof map2);  //Object

// ****************************************************

// Example: 

// const map1 = new Map();

// map1.set('a', 1);   //Create a Map and use
// map1.set('b', 2);
// map1.set('c', 3);

// console.log(map1.get('a'));    //get() method is used to retrieve/get the value of a key in a Map.
// // Expected output: 1

// map1.set('a', 97);     //set() method is used to create a Map and use, and also used to change existing Map values.

// console.log(map1.get('a'));
// // Expected output: 97

// console.log(map1.size);     //to check the size
// // Expected output: 3

// map1.delete('b');

// console.log(map1.size);
// // Expected output: 2

// console.log(typeof map1);


// *************************************************************

// To print map through forof Loop

for (const key of map2) {
    console.log(key);
    
}

// Return in Array Format:
// [ 'IND', 'India' ]
// [ 'USA', 'United state of America' ]
// [ 'JPN', 'Japan' ]

// **************************************************************

// Another Way to print map through forof Loop  (key,value separately)

// for (const [key, value] of map) {
//     console.log(key, ':-', value);   //Returns:-   IND :- India
//                                              //    USA :- United state of America
//                                              //    JPN :- Japan
    
// }

// *************************************************************

// Note:
// Objects are not iterable
// forof loop is not working with objects
// forin loop is work with Objects
// forof loop is work with Maps


// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for(const [key, value] of myObject){
//     // console.log(key, value);   //Error:- Objects are not iterable, through another way we can iterate so, we learn later.
// }
    
    

