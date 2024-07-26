const tinderUser= {}

tinderUser.id= "123abc"
tinderUser.name= "ashu"
tinderUser.isLoggedIn= false

// console.log(tinderUser)

const regularUser ={
    email: "some@aome.mail",
    fullName:{
        userName:{
            firstName: "Ashutosh",
            lastName: "patel"
        }
    }
}

//console.log(regularUser.fullName.userName)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e", 6:"f"}

// const obj4={obj1,obj2}

//const obj4= Object.assign({},obj1,obj2,obj3)
//const obj4= {...obj1,...obj2}
//console.log(obj4)

const user=[
    {
        id: 1,
        email:"asjd@akdjf.com"
    },
    {
        id: 2,
        email:"asjd2@akdjf.com"
    },
    {
        id: 3,
        email:"asjd3@akdjf.com"
    }
]

// console.log(user[1].id)

// console.log(Object.keys(tinderUser))//returns array of ids
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))

const course= {
    courseName: "js in hindi",
    price: "999",
    courseInstructer: "hitesh"
}

//object de-structuring
const {courseInstructer:instructer}= course
console.log(instructer)