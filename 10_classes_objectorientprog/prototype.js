// let myName = "Veeresh"
// console.log(myName);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor:"hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }

}

Object.prototype.veeresh = function(){
    console.log(`veeresh is present in all objects`);
    
}

Array.prototype.heyVeeresh = function(){
    console.log('Veeresh say hello');
    
}

heroPower.veeresh()   //veeresh is present in all objects
myHeros.veeresh()
myHeros.heyVeeresh()
// heroPower.heyVeeresh()

// **********************************************************
// Prototypal Inheritance

const user ={
    name: "Ankit",
    email: "ankit@google.com"
}
 
const teacher ={
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}


// old syntax
teacher.__proto__ = user

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, teacher)  //gives the property access to TeachingSupport of teacher





let anotherUserName = "kapil     "
String.prototype.trueLength = function(){
    console.log(`${this}`);      //kapil
    
    console.log(`True Length is: ${this.trim().length}`);

}

anotherUserName.trueLength()   //True Length is: 5
"veeresh".trueLength()    //True Length is: 7

