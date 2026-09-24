const ownObject = {
    userName:"Hamza",
    age:20,
    greet:()=>{
        console.log(this.userName)  //arrow function will not this of its own but its parents.
    }
}
ownObject.greet() //it will return undefined

//Normal function take the "this" of where it was created while arrow does take this only from its parent. An example is shown below:
const thisExample = {
    userFirstName:"John",
    normalGreet(){
        arrowGreet=()=>{
            console.log(`arrowGreet takes normalGreet's this. Hello ${this.userFirstName}`)

        }
        arrowGreet()


    }
}
thisExample.normalGreet()