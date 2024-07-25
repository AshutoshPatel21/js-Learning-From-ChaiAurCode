const myDate= new Date()

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2023,0,23)  //(year,month,date,hour,minute,second)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3,34)
//let myCreatedDate = new Date("2023-04-23")
let myCreatedDate = new Date("02-29-2024") //(date-month-year ) will say invallid date

//  console.log(myCreatedDate)
//  console.log(myCreatedDate.toLocaleString())


// let myTimeStamp= Date.now()
// console.log(myTimeStamp) //returns microseconds
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))  //converts ms into s

let newDate= new Date()
console.log(newDate.getTime())
console.log(newDate.getDate())
console.log(newDate.getMonth())
console.log(newDate.getDate())


newDate.toLocaleString("default",{
    weekday: "long",
})