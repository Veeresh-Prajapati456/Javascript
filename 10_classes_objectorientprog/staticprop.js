class User{
    constructor(username){
         this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){   //static stop to access that method or property
        return `123`
    }
}

const name = new User("veeresh")
// console.log(name.createId());   //123


class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
}

const detail = new Teacher("Anmol", "anmol@gmail.com", "1234")
console.log(detail.createId());  //Error an error because of static :detail.createdID() is not a function
