//Normal function
 const chai=()=>{
    // console.log("DB Connected")

 }
 //chai()

//Immediatetly invoked function we dont store it in a variable cause we want the func to run immediately. ";" is must after iife
(()=>{
    //console.log("IIFE DB ")
})();
//console.log("the iife has been run")

//parametrized iife. we put it in a variable to store it
const iifeSum = ((num1,num2)=>(num1+num2))(5,4);
//console.log(iifeSum)
 ((name)=>{
    console.log(`The user is ${name}`)

 })('Hamza');