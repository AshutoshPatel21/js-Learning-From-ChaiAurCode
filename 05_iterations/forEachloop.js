const coding=["js", "ruby","java","python","cpp"]

// coding.forEach((value,index,arr)=>{
//     //    console.log(value,index,arr)   
//     // console.log(value)  
//     console.log(index)  
// })

// function printMe(items){
//     console.log(items)
// }

// coding.forEach(printMe)

const myObj={
    new:"newsss",
    old:"olds"

}
//forEach works on array 
// Object.keys(myObj).forEach((items)=>{
//     console.log(myObj[items])
// })
// Object.values(myObj).forEach((items)=>{
//     console.log(items)
// })

const myCoding=[
    {
        languageName: "javascript",
        languageFileName: "js"
    }
    ,
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((items) => {
    // console.log(items.languageFileName)
    console.log(items)
});

//for each returns void
// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);