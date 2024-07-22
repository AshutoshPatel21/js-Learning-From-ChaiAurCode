const accountId= 134324;
let accountEmail= "ashutosh@gmial.com"
var accountPassword = "12345"
accountCity="jaipur"  //it is safe to declare var like this bt not recommended
/* 
prefer not use var ,
because of issue in block scope and functional scope
*/

accountEmail= "dskfj@gmial.com"

//in javaScript ';' is independently can be use

//accountId = "jaipur" // not allowed to change const var

console.log(accountId,accountEmail);

console.table([accountId,accountPassword, accountEmail]);



