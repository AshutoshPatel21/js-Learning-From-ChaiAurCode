class User{
    constructor(userName){
        this.userName=userName;
    }
    logMe(){
        console.log(`userName is ${this.userName}`)
    }
}

class Teacher extends User{
    constructor(userName,email,password){
        super(userName)
        this.email=email
        this.password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);