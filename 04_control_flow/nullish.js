//Nullish Coalescing operator (??) if the first value is null/undefined it will assign the next value given.
let val1;
val1 = null ?? 5 
//console.log(val1) //this will print 5
val1= 2 ?? 7 
//console.log(val1)  //this will print 2

//Terniary Operators (shortened if-else):
//condition ? true : false
const iceCream =80
iceCream>=80 ? console.log("Yes its true.") : console.log("Not true")