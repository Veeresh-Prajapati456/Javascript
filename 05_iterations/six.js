// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach(  (item) => {
//     console.log(item);  //Return:-  js ruby java python cpp
//     return item
    
// })
// console.log(values); //Return:- Undefined (means forEach never return anyvalue)

// ***********************************************************

// Filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// filter return the values
// filter ke andar ek call-back function milega jis ke andar har value ko each access kiya jayega, lakin uske baad aap ko deni padti hai condition, jo jo log uss condition ko satisfy karenge, aur true hogi condition vo vo values return ki jayengi, warna vo values return nahi ki jayengi
// const newNums = myNums.filter(  (num) => num > 4)  //The filter also has a call-back function within itself.(filter bhi apne andar call-back function hi leta hai)
//      OR
// const newNums = myNums.filter(  (num) => {   //if we write curly braces/scope open then we need to write return, otherwise no need to write return
//     return num > 4
// } ) 

// console.log(newNums);  //Return:- [5, 6, 7, 8, 9, 10]

// *************************************************************
//                 OR
// **************************************************************
 
// We can also do above problem with forEach 
const myNewNums = []

myNums.forEach(  (num) => {
    if (num > 4) {
        myNewNums.push(num)
        
    }
} )
// console.log(myNewNums); //Return:- [ 5, 6, 7, 8, 9, 10 ]

// ****************************************************************

const employee = [
    { name: 'Sara', age: 28, developer: true, skills: 'JavaScript', join_year: 2010 },
    { name: 'Ankit', age: 24, developer: true, skills: 'Express', join_year: 2005 },
    { name: 'Suman', age: 27, developer: true, skills: 'JavaScript', join_year: 2017 },
    { name: 'Kapil', age: 35, developer: true, skills: 'Node', join_year: 2021 },
    { name: 'Sachin', age: 30, developer: true, skills: 'React', join_year: 2003 },
    { name: 'Rohit', age: 30, developer: true, skills: 'Angular', join_year: 2013 },
    { name: 'Atul', age: 38, developer: true, skills: 'css', join_year: 2007 },
    { name: 'Kunal', age: 29, developer: true, skills: 'JavaScript', join_year: 2018 },
    { name: 'Aman', age: 30, developer: true, skills: 'React', join_year: 2020 }
  ];

// let employeeName = employee.filter(  (emp) => emp.skills === 'JavaScript')

employeeName = employee.filter(  (emp) => {
    return emp.join_year >= 2010 && emp.skills === 'JavaScript'
} )


console.log(employeeName);

// Return:-
// [
//     { name: 'Sara', age: 28, developer: true, skills: 'JavaScript' },
//     { name: 'Suman', age: 27, developer: true, skills: 'JavaScript' },
//     { name: 'Kunal', age: 29, developer: true, skills: 'JavaScript' }
// ]
