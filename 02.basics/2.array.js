const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)     //this pushes the dcheros arr in marvelheros arr as new element(4th) in form of arr
// console.log(marvel_heros)
// console.log(marvel_heros[3][0])

// const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros)

// const allNewHeros=[...marvel_heros,...dc_heros]  //...is spread operator
// console.log(allNewHeros)

// const anotherArray=[1,2,3,[4,5],6,[7,[8,9]]]
// const realAnotherArray=anotherArray.flat(Infinity)          //flat(depth)

// console.log(realAnotherArray)

console.log(Array.isArray("ashutosh"))
console.log(Array.from("ashutosh"))
console.log(Array.from({name:"ashutosh"}))      //intresting

let score1=100
let score2=3434
let score3=345

console.log(Array.of(score1,score2,score3))