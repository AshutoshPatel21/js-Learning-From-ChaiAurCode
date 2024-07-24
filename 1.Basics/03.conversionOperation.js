// //1.conversion in to Number

// //let score= "33";
// //let score= "33ab";
// //let score= "ab";
// //let score= null;
// //let score= true;
// //let score= false;

// // console.log("before conversion:")

// // console.log(score);
// // console.log(typeof(score))

// // let valueInNumber= Number(score)

// // console.log("after conversion:")

// // console.log(typeof(valueInNumber))
// // console.log(valueInNumber)

// //"33" => 33
// //"33ab" => NaN
// //null =>0
// //true and false => 1 and 0

// //2.conversion in to Boolean

// //let isLogedIn = 1;
// // let isLogedIn = 0;
// // let isLogedIn = 1111;
// // let isLogedIn = null;
// // let isLogedIn = "";  empty string
// let isLogedIn = " ";  //string with a space
// console.log(typeof(isLogedIn))

// let booleanIsLogedIn = Boolean(isLogedIn)
// console.log(booleanIsLogedIn)
// console.log(typeof(booleanIsLogedIn))

// 1 => true
// 0 => false
// "" => false
// 111=> true
// "asdf" => true

//3.conversion to string

// let someNo=33
// let someNo=null
// let someNo=true
// let someNo=0

// let stringNumber= String(someNo)
// console.log(stringNumber)
// console.log(typeof stringNumber)

//******************************  Operations ******************************

// let value= 3
// let nValue= -value;


// let str1="ashutosh"
// let str2=" patel"
// let str3= str1+str2
// console.log(str3)

console.log(1 + "2")
console.log("1" + 2)
console.log("1" + 2 + 2)
console.log(1+2 + "2")
//if string is used at strting then all others after that treated as string

console.log(+true) //is allowed
// console.log(true+) //not allowed