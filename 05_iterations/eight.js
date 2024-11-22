// const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce(function (accumulator, currentvalue) {
//     console.log(`acc: ${accumulator} and currentvalue: ${currentvalue}`);
    
//     return accumulator + currentvalue
// }, 0) //( 0  is the accumulator value in the starting, we can give any value to the accumulator)

// console.log(myTotal);
// return:-
// acc: 0 and currentvalue: 1
// acc: 1 and currentvalue: 2
// acc: 3 and currentvalue: 3
// acc: 6 and currentvalue: 4
// 10

// **********************************************************

//Solving above problem with Arrow function

const myNums = [1, 2, 3, 4]

const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)
//( 0  is the accumulator value in the starting, we can give any value to the accumulator)

console.log(myTotal);

// **********************************************************

const shoppingCart = [
    {
        courseName:"C++",
        price: 2999
    },

    {
        courseName:"React",
        price: 3999
    },

    {
        courseName:"Data Science",
        price: 7999
    },

    {
        courseName:"Java",
        price: 5999
    },

    {
        courseName:"Python",
        price: 4999
    }
];

const priceToPay = shoppingCart.reduce( (acc, item) => (acc + item.price), 0)

console.log(priceToPay);  //Return:- 25995
