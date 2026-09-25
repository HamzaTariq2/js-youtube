const ownObject = {
    userName:"Hamza",
    age:20,
    greet:()=>{
        //console.log(this.userName)  //arrow function will not this of its own but its parents.
    }
}
ownObject.greet() //it will return undefined

//Normal function take the "this" of where it was created while arrow does take this only from its parent. An example is shown below:
const thisExample = {
    userFirstName:"John",
    normalGreet(){
        arrowGreet=()=>{
            //console.log(`arrowGreet takes normalGreet's this. Hello ${this.userFirstName}`)

        }
        arrowGreet()


    }
}
thisExample.normalGreet()

//impicit return. one line arrow function (no "{}" or "return" needed but "()" needed)
const abc = (num1,num2) => (num1+num2)
// console.log(abc(5,5))

//implicit object 
const obj = (num1,num2)=>({username:"Hamza"})
console.log(obj(4,6))