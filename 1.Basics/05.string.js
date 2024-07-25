// const name ="ashutosh";

// const myRepoCount= 3;


// console.log(name + " " + myRepoCount) //old way 

// console.log(`my name is ${name} and repoCont is ${myRepoCount}`)  //string inerpolation


 const fullName= new String("Ashutosh Patel")

// // console.log(fullName.length)
// // console.log(fullName.toUpperCase())
// console.log(fullName.charAt(2))
// console.log(fullName.indexOf('h'))  //returns first found char

// const newString= fullName.substring(0,4)
// console.log(newString)

const anotherString= fullName.slice(4,0)
// if indexEnd comes before the indexStart in the string then output will be empty string
console.log(anotherString)

// const newStringOne="  Ashutosh   "
// console.log(newStringOne)
// console.log(newStringOne.trim()) //deletes whitespaces

// const url= "https://hitesh.com/hitesh%20-choudhary"
// console.log(url.replace("%20","-"))
// console.log(url.includes("sundar"))     //checks if string present

// console.log(url.split("-"))