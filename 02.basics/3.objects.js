/*objects can be declared through 2 ways:- 
1.by Literels and 2.by Constructer 

when object is created through constructor the object would be 
sigleton bt 

when created through literal the object will have 
many instances

//Object.create() =>through constructer
*/

//object literals

let mySym= Symbol("key1")

//keys in objects always processed as string
const Jsuser={
    name:"Ashutosh",        
    "full name":"Ashutosh Patel",
    // mySym:"mykey1",
    [mySym]: 5,
    age:24,
    email:"ashu@google.com",
    isLoggedIn:false,
    location:"jaipur",
    lastLoginDays:["monday","sunday"]
}
// console.log(Jsuser.name)
// console.log(Jsuser.age)
// console.log(Jsuser.email)
// console.log(Jsuser.isLoggedIn)
// console.log(Jsuser.location)
// console.log(Jsuser.lastLoginDays)
// console.log(Jsuser["lastLoginDays"])


//can not get access with . operator
// console.log(Jsuser["full name"])
// console.log(typeof Jsuser[mySym])
// console.log(typeof Jsuser.mySym)
// console.log(typeof  mySym)

// Jsuser.email="ashutosh@gmial.com"
// Object.freeze(Jsuser)
// Jsuser.age=26
// console.log(Jsuser.age)
// console.log(Jsuser.email)

Jsuser.hobby="violin"
Jsuser.greeting= function(){
    console.log('hello')
     return "hi"
}

// console.log(Jsuser.greeting)
console.log(typeof Jsuser.greeting)     //greeting =>key
 //console.log(Jsuser.greeting())
console.log(typeof Jsuser.greeting())   //function calling greeting()
console.log(Jsuser.greeting())   //function calling greeting()
Jsuser.greeting()
console.log(Jsuser)