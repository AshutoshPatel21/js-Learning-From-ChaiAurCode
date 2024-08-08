function setUserName(userName){
    this.userName=userName
    console.log("called")
    console.log(this.userName)
}

function createUser(userName, email, password){

    setUserName.call(this,userName)  //here this is setUserName's this 
    //returns his this to createUser
    this.email=email
    this.password= password
}

const chai= new createUser("chai","asdjf@gmail.adfj","adfj")

console.log(chai)