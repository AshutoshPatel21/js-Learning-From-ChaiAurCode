const user={
    userName: "ashutosh",
    price:100,

    welcomeMessage: function (){
        console.log(` ${this.userName}, Welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.userName= "appple"
// user.welcomeMessage()
// console.log(this) //bt in browser this statement return windows

// function chai(){
//     let userName= "abba"
//     // console.log(this.userName)
//     console.log(this)

// }
// chai();

// let chai=function(){
//     let userName="abba"
//     console.log(this.userName)

// }

// chai()

const chai=()=>{
    let userName="adfj"
    console.log(this.userName)
}

// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

// const addTwo=(num1,num2)=> num1+num2
// const addTwo= (num1,num2)=> (num1+num2)
// const userName=(nam)=>({name:"asd"})

// console.log(addTwo(2,3))
// console.log(userName("ashutosh"))

