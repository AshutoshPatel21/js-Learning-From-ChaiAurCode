// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)
//all above statements compared without typecasting because of same datatype
//hence its ok to use all above returns boolean true aor false

// console.log("2" > 1)
// console.log("02" > 0)
//automatically converted to no
//it is not recommended to compare two diff dataTypes

console.log(null > 0) //loosely check
console.log(null == 0)
console.log(null >= 0)
console.log(-0 == +0)
console.log(NaN == NaN)
console.log(NaN == undefined)
console.log(undefined == undefined)
/* the reason is that an equality check ==  and comparisons > 
    < , >= , <= works differently

    Comparisons convert null to anumber, treating it is as 0
    thats why null >= is true and null > 0 is false
*/
console.log("2" === 2)// recommended
