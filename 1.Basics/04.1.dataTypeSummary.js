// // premitive  => call by value

// // 7 types : String, Number, Boolean, null , undefined, Symbol, BigInt

// const score= 100
// const scoreValue=33.3

// const isLoggedIn = false
// const outsideTemp= null;
// let userEmail;

// const id =Symbol('123')
// const anotherId= Symbol('123')
// //console.log(id===anotherId) //both has diff values which make them unique

// const bigNum= 4366n;

// // Recurssive (non-premitive)
// // Array, Objects, Functions
// const arr=["ashutosh", "patel"]

// const heros= {
//     name: " ashutosh",
//     age: 25,
// }

// const myFunction= function(){
//     console.log("into function");
// }

// console.log(typeof bigNum)
// console.log(typeof scoreValue )
// console.log(typeof outsideTemp)
// console.log(typeof userEmail)
// console.log(typeof id)
// console.log(typeof arr)
// console.log(typeof heros)
// console.log(typeof myFunction)

//**************************************
//stack(premitive datatypes) , Heap(non-premitive dataTypes)

let myName="ashutosh"
let myAnotherName= myName

myAnotherName="Patel"

console.log(myName)
console.log(myAnotherName)

let user={
    email:"asdfj@gmial.com",
    upi:"asdkjf",
}

let anotherUser= user

anotherUser.email= "ashu@gmail.com"

console.log(user)
console.log(anotherUser)