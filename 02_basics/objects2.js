//Making singleton instances of an object through a constructor
const myObject = new Object();
myObject.name="Hamza"
myObject.age=20
myObject.sayHello=function(){
    console.log("Hello my name is "+this.name+" and I am "+this.age+" years old")
}
console.log(myObject)
console.log(myObject.sayHello())

console.log("-------------------------Combining objects--------------------------")
const obj1={1:"a"}
const obj2={2:"b"}
const mergedObj=Object.assign({},obj1,obj2)
console.log(mergedObj)

console.log("-------------------------BETTER WAY TO MERGE OBJECTS JUST LIKE ARRAYS--------------------------")  
const obj3={...obj1,...obj2}
console.log(obj3)

console.log("-------------------------Turning an object's keys/values into an array--------------------------") //very useful when we want to iterate over an object
const user1 = {name:"Hamza",age:20}
user1Keys=Object.keys(user1)
user1Values=Object.values(user1)
console.log("User1 keys: ",user1Keys)
console.log("User1 values: ",user1Values)

console.log("-------------------------hasOwnProperty check--------------------------")
console.log(user1.hasOwnProperty("name")) //true
console.log(user1.hasOwnProperty("email")) //false