/* singleton/Constructor */
//const tinderUser = new Object()


const tinderUser = {}  //literal object

tinderUser.id = "123abc"
tinderUser.name = "Veeresh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "veeresh678@gmail.com",
    fullname : {                        // Object In Object
        userfullname : {
            firstname : "veeresh",
            lastname : "Kumar"
        }
    }
}

// console.log(regularUser.email);

// console.log(regularUser.fullname.userfullname); //way to access object in object


const source1 = {1: "a", 2: "b"}
const source2 = {3: "c", 4: "d"}
const source3 = {5: "e", 6: "f"}

// const returnTarget = Object.assign({}, source1, source2, source3) //we assume ( {} ) as target so that all that sources put into empty onject({}) to combine all the sources.
// Taking Empty Object ( {} ) as target is the good practice.
// console.log(returnTarget);  //Return:-  { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


/*                 OR                    */

// const returnTarget = Object.assign(source1, source2, source3) //we assume source1 as target and rest of the source (source1, source2) are combine into it.

// console.log(returnTarget);  //Return:-  { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


//Most Commonly Used:- Spread Operator:- to combine
// const returnTarget = {...source1, ...source2, ...source3}
// console.log(returnTarget);  //Return:-  { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


//Values from Database
const user = [                      //Array of Object
    {
        id : 101,
        name : "Veeresh Kumar",
        email : "veer22@gmail.com"
    },

    {
        id : 102,
        name : "Ankit",
        email : "ankit46@gmail.com"
    },

    {
        id : 103,
        name : "Kapil Gupta",
        email : "kapilg44@gmail.com"
    },

    {
        id : 104,
        name : "Amit Sharma",
        email : "amit789@gmail.com"
    }
]

// console.log(user[2].email);  //Way to access values of Array of Object

// console.log(tinderUser); //Returns:- { id: '123abc', name: 'Veeresh', isLoggedIn: false }

// console.log(Object.keys(tinderUser));  //Way to access all Keys of Object, and the data type of that keys is Array. Eg:- [ 'id', 'name', 'isLoggedIn' ]

// console.log(Object.values(tinderUser));  //Ways to access all Values of Object. Return in Array Eg:-  [ '123abc', 'Veeresh', false ] 

// console.log(Object.entries(tinderUser));  //Ways to access all entries of Object. // Returns array into array with key-value.  Eg:- [ [ 'id', '123abc' ], [ 'name', 'Veeresh' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //To check either property is exist or not. if property is exist then returns true or vice-versa.  Eg:- true



//***********************************************************************/

//Destructuring happens for array as well as object.


//Destructuring Of Object

const course = {
    coursename : "JavaScript",
    price : "999",
    courseInstructor : "Veeresh Kumar"
}

// console.log(course);
// console.log(course.courseInstructor);
//              OR
// console.log(course["courseInstructor"]);


//Another way to console log
const {courseInstructor : instructor} = course  // Here we have done Object Destructuring:- "course" means from where we have to extract values, and suppose we have to extract "courseInstructor"
console.log(instructor);  //Return:- "Veeresh Kumar"




// // Concept of React  not in JS
// const navbar = ({companyName}) => {     //Here we do destructuring:-  we write ({companyName}) instead of writing (props.companyName) or (props.keyName)

// }
// navbar(companyName = "veeresh")  //Here we call navbar and give values to navbar
