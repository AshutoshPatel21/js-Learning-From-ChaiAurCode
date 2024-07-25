const myArr= [0,1,2,3,4,5]
const myHero= ["shaktiman","ironMan","superMan",'hulk']

const myArr2= new Array(1,2,3,4)

// console.log(myArr2)
// console.log(myHero)
// console.log(myHero[1])
// console.log(typeof myArr2)
// console.log(typeof myArr)

//Array Methods

// myArr.push(2)  //add at the end
// myArr.pop()      //delete from the end

// myArr.unshift(4)    //add to start  ,it is not recco to use as it increases the complexity
// myArr.shift()     //delete from the start

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

// const newArr= myArr.join()  //into string

// console.log(newArr)
// console.log(myArr)

//slice and splice

console.log("A", myArr)

console.log("B", myArr.slice(1,3)) //slice(insexStart,insexEnd(exluded))
console.log("D", myArr)
console.log("c", myArr.splice(1,3))  //splice(indexStart,deleteCountElement,item1,item2(to add).....)
console.log("D", myArr)