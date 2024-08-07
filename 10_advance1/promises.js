// const promiseOne= new Promise(function(resolve, reject){
//     //do an aync task
//     //DB calls, cryptography, network

//     setTimeout(function(){
//         console.log('Async task is complete')
//         resolve()
//     },1000)
// })

// //consuming promiseOne

// promiseOne.then(function(){
//     console.log('promise consumed')
// })

//IMPORTANT-in promise, reject get error only if promise does not able to request and all other errors go to reaponse
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve();
        
    },1000)
}).then(function(){
    console.log('Async task 2 complete');
    
})

// const promiseThree= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('promis 3')
//         resolve({name:'ashu',email:"ashu@g.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// });

// const promiseFour= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=true;
//         if(!error){
//             resolve({name:'ashu',email:'asd@g.com'})
//         }else{
//             reject("Error: error set to true")
//         }
//     })
// })

//cannot put return valoe of then to a variable, it goes to next then()
//promise<pending> till returned value is not used

// const userName=promiseFour.then((user)=>{
//     console.log(user);
//     return user.name;
// })
// console.log(userName)

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.name;
// }).then((userName)=>{
//     console.log(userName);
// }).catch(function(error){
//     console.log(error)
// }).finally(()=>{                //finally always runs
//     console.log('the promise is either resolved or rejected')
// })

// const promiseFive= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=true;
//         if(!error){
//             resolve({name:'ashu',email:'asd@g.com'})
//         }else{
//             reject("Error: error set to true")
//         }
//     })
// })

//async does not gracefully handle errors or catch()
//for gracefuly hande error use try and catch block
// async function consumePromiseFive(){

//     try{
//         const response= await promiseFive;
//         console.log(response)
//     }catch(error){
//         console.log(error);
        
//     }    
// }

// consumePromiseFive();

// async function getAllUser(){
//     try{
//         const response=await fetch('https://api.github.com/users/hiteshchoudhary') 
//         //fetching will take time so we use await
//         // console.log(response);
//         const data= await response.json();
//         //converting to json also take time so await used
//         console.log(data);
        
//     }catch(error){
//         console.log("errror occcured",error);
//     }
// }

// getAllUser();


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error)
})