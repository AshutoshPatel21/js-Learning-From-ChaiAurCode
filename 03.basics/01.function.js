
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){//parameter
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMeassage(""))        //empty string
//console.log(loginUserMeassage())        //return undefined 

// console.log(loginUserMessage("hitesh"))  //arguments
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(value1,value2,...num){
    return num ,value1,value2   //returns only value2 value
}
//ifunction calculateCartPrice(num) then first argument value asssign to num other get discarded
//by the use of rest operator(...) we can dundle all passed value in the num in the form of array
// console.log(calculateCartPrice(400,500,800,200))

//passing object in function

const user={
    userName:"ashutosh",
    prices:788
}

function handleObject(anyObject){
    console.log(`userName is ${anyObject.userName} and price is ${anyObject.prices}`)
}

// handleObject(user)
handleObject({userName:'sam',
    prices:899
})


//passing array to the function

const myNewArray=[200,400,500]

function arrayPassing(getArray){
    return getArray[2]
}

console.log(arrayPassing(myNewArray))

console.log(arrayPassing([200,400,600]))