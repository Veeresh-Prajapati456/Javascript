// Foreach Loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item){  // function we used iinside coding.forEach is Call Back Function
//     console.log(item);
    
// })

//                   OR

// coding.forEach( (item) => {   //With the help of Arrow Function
//     console.log(item);
    
// })


// *******************************************************************


// Another Way

// function printMe(item){
//     console.log(item);     //Returns:-     js
//                                          //ruby
//                                          //java
//                                          //python
//                                          //cpp
    
// }

// coding.forEach(printMe)

// ******************************************************************

// coding.forEach( (item, index, arr) => {
//     // console.log(item, index, arr);     //Returns:-  js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//                                                      //ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//                                                      //java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//                                                      //python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//                                                      //cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    
// })


// ******************************************************************


// Data receive from Database are in the Format of Array, and every value is an Object

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: ".js"
    },

    {
        languageName: "C++",
        languageFileName: ".cpp"
    },

    {
        languageName: "Python",
        languageFileName: ".py"
    },

    {
        languageName: "Java",
        languageFileName: ".java"
    }
]
myCoding.forEach( (item) => {
    // console.log(item.languageName);   //get value of languageName

    console.log(item.languageFileName);   //get value of languageFileName
    
});