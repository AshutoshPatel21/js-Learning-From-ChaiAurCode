//immediately invoked function expressions(IIFE)
//sytax   (definition ){}(calling);
(function chai(){
    //named iife
    console.log(`DB connected`);
})();

((name)=>{
    console.log(`DB connected to ${name}`)
}

)("ashu"); 
// if we don put ; then iife does not know where its execution end and we can not create another iife