//When we declare an object through literals, its not a singleton. From a constructor, it is a singleton.
//Object.create(making singleton instances of and object through a constructor)

//object literals (the usual way):
const mySymbol=Symbol() //to make symbol a part of an object, we must decalre it outside an object first
const person={
    name:"Hamza",
    email:"hamzatariqprofessional@gmail.com",
    isLOggedIn:false,
    [mySymbol]:"Key1" //This is a symbol
}
console.log("***************Correct way to access an object's values**************************")
console.log("My email from the object: ",person["email"])
console.log("My symbol",person[mySymbol]) //key will not be a string
console.log("Type of mySymbol", typeof person[mySymbol])
//Object.freeze(person) //Any key/value in the object cannot be changed

//Introducing a new func in an object and using 'this' command
person.greeting=function(){
    console.log(`Hello ${this.name}`)} //arrow functions do not have their own 'this' keyword, so we cannot use them here
console.log(person.greeting()) //Hello Hamza