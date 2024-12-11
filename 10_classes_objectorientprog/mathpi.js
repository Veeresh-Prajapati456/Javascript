const descripter = Object.getOwnPropertyDescriptor(Math, "PI")  //"Math" is the object and "PI"  is the object property
console.log(descripter);
/* Returns:-

{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}

*/


// First Way to create Object

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Order is not prepare");
        
    }
}

// console.log(chai);  //Returns:- { name: 'ginger chai', price: 250, isAvailable: true }

console.log(Object.getOwnPropertyDescriptor(chai, "name"));  //"chai" is the object and "PI"  is the object property
/* Returns:-

{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}

*/

Object.defineProperty(chai, 'name', {         //to define the properties
    // writable: false,
    enumerable: false
})      
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));  //"chai" is the object and "PI"  is the object property
/* Returns:-

{
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
}

*/

// Way to apply for loop on forof loop
// for (let [key, value] of Object.entries(chai)) {
//     console.log(`${key}:${value}`);
    
// }

/* Returns:-

name:ginger chai
price:250
isAvailable:true

*/


for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){

        console.log(`${key}:${value}`);
    }
    
}

/* returns:-

name:ginger chai
price:250
isAvailable:true

*/


// Another way to create object

// const mynewObject = Object.create(null)