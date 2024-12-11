//function,Array,String in JavaScript are objects.

function multiply(num){
    return num*5
}

multiply.power = 2

console.log(multiply(5));           //return:- 25
console.log(multiply.power);       // 2
console.log(multiply.prototype);  // {}

// *********************************************************

function createUser(username, score){
    this.username = username
    this.score = score
}
createUser.prototype.increment = function(){ 
    this.score++
}

createUser.prototype.printMe = function(){  //way to create custom method
    console.log(`price is ${this.score}`);   //this ka matlab 'jiss' ne bhi  score pucha hai uss ka score bato  
    
}

const chai = new createUser("chai", 25)  //price is 25
const tea = new createUser("tea", 250)

chai.printMe()
