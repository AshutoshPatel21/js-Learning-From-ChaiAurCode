//object litral

// const user= {
//     userName:"ashu",
//     loginOUnt:8,
//     signedIn:true,

//     getUserDetails: function(){
//         console.log("got the data from the database")
//         // console.log(userName)
//         console.log(this.userName)
//     }
// }

// console.log(user.getUserDetails())
// console.log(this)
//in browser inviornment this will give window object

// const promiseOne= new Promise()
// const newDate= new Date()
//here new is a construvtor function, which helps to create new instance of the class

//constructor function
function User(userName,loginCount,isLogedIn){
    this.userName=userName
    this.loginCount=loginCount
    this.isLogedIn=isLogedIn

    this.greetings=function(){
        console.log(`Welcome ${this.userName}`)
    }

    return this //if we not return it returns by default
    //this has access to all above variables
}

// const userOne= User("ashu",8,true)
// const userTwo= User('chai',8,false)
// //here new instance of user is not being created so values are getting overwrite
// //so for not to overwrite by all have to make new instance all the time by new keywords
//when we use new, first a empty object created then constructor function get called
//after that in this all properties and methods get injected
// console.log(userOne)

const userOne= new User("ashu",8,true)
const userTwo= new User('chai',8,false)
// console.log(userOne)
// console.log(userTwo)
// console.log(typeof userTwo)

console.log(userTwo.constructor)  //constructor is refrenced to itself