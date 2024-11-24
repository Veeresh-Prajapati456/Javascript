// Forin loop is work with Objects

// Object

// const myObject = {
//     js: 'javascript',
//     cpp: 'c++',
//     rb: 'ruby',
//     swift: 'swift by apple'
// }

// for (const key in myObject) {
    // console.log(key);   //Returns only keys.

    // console.log(myObject[key]);   //Returns only values
    

    // console.log(`${key} shortcut is for ${myObject[key]}`);     //Returns key-value pair
     
// }



// Array
// Forof Loop

// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const [key,value] of programming) {
//     console.log(key);  //Return only values
    
// }



// Forin Loop

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);  //Return only keys
    
    console.log(programming[key]);  //Returns only Values
    console.log(`${key} => ${programming[key]}`); 
    
}

// *******************************************************************


// Map is not return any output with Forin Loop, because map is not iterable in case of Forin
// forof loop is work with Maps

// const map = new Map()
// map.set('IND', "India")
// map.set('USA', "United state of America")
// map.set('JPN', "Japan")

// for (const key in map) {
    // console.log(key);   //Return:- No Output

// }