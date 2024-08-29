//for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr){
    console.log(num);
    
}



const greetings = "Hello World"

for(const greet of greetings){
    console.log(`Each char is ${greet}`);
    
}



// Maps

const map = new Map()
map.set('IND', "India")
map.set('USA', "United state of America")
map.set('JPN', "Japan")

// console.log(map);  //Returns:- Map(3) {
                              //  'IND' => 'India',
                             //   'USA' => 'United state of America',
                            //    'JPN' => 'Japan'
                            //  }

//Important Note:- Map Will always return Unique value, Map is a Object and it holds key-value pairs and it will return in the original insertion order of the keys

for (const [key, value] of map) {
    console.log(key, ':-', value);   //Returns:-   IND :- India
                                             //    USA :- United state of America
                                             //    JPN :- Japan
    
}


// Objects are not iterable
// For-of loop it not working with objects
// for-of loop is work with Maps


// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for(const [key, value] of myObject){
//     // console.log(key, value);   //Error:- Objects are not iterable
// }
    
    

