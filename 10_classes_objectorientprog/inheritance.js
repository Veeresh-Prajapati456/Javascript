class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log((`USERNAME is ${this.username}`));
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const details = new Teacher("Harman Singh", "chai@gmail.com", "123")
details.addCourse()   //A new course was added by Harman Singh

const userName = new User("Aman Verma")

userName.logMe()    //Aman Verma

console.log(details === userName);    //false

console.log(details instanceof Teacher);   //true

