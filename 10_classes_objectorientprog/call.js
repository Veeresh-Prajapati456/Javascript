function setUserName(username){
    // complex DB calls
    this.username=username
    console.log("called");
}

function createUser(username, email, password){
    setUserName.call(this.username)   //to hold the reference we use /call()  
    this.email = email
    this.password = password
}
const details = new createUser("veeresh", "veeresh@gmail.com", "123")
console.log(details);


/* Why use .call()
when a function is written for one object but we want to use it with another.
          OR
.call() Method pass the Execution context to another function
          OR
To borrow methods from one object for another.
To reuse functions with different objects (this context).


Real Life Example of .call()

Imagine you're a tailor who made a suit (function) for Person A (object). Later, Person B (another object) wants to try on the suit. Using .call() is like adjusting the suit to fit Person B.

 */


/*

Real-Life Example in Code:

Suppose we have a generic function that calculates the full name of a person:

function getFullName(city, country) {
  return `${this.firstName} ${this.lastName} from ${city}, ${country}`;
}


We also have two different objects representing two people:

const person1 = { firstName: "John", lastName: "Doe" };
const person2 = { firstName: "Jane", lastName: "Smith" };


Now, we want to use the getFullName function for both people, but it's not inside their objects. Here's how .call() helps:

const fullName1 = getFullName.call(person1, "New York", "USA");
console.log(fullName1); // John Doe from New York, USA

const fullName2 = getFullName.call(person2, "London", "UK");
console.log(fullName2); // Jane Smith from London, UK

*/