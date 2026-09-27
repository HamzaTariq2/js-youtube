//.map() same as forEach but u can store .map() function in a variable
//NOTE: filter() and map() returns an array
const numbers = [1,2,3,4,5,6]
const newNums=numbers.map((num)=>num*2)
//console.log(newNums)

//Methods chaining (multiple methods on single array)
const nums = [1,2,3,4,5]
const newNum = nums.map((n)=>n*10).map((n)=>n+1).filter((n)=>n>=31)
//console.log(newNum)

//reduce. used to reduce an array to a single value. current values of array adds up into sum(accumulator). the accumulator must be initialized
//in the end. (it is most commonly zero)
const bill= [20,30,40,50]
const newTotal = bill.reduce((sum,currval)=>(
    sum+currval
),0)//this is the initializing value of sum.
//console.log(newTotal)

const shoppingCart = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 25.99,
    quantity: 2
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 89.99,
    quantity: 1
  },
  {
    id: 3,
    name: "27-inch 4K Monitor",
    price: 329.50,
    quantity: 1
  },
  {
    id: 4,
    name: "USB-C Cable (6ft)",
    price: 12.00,
    quantity: 3
  }
];
const shpBill = shoppingCart.reduce((acc,currval)=>currval.price+acc,0)
console.log(shpBill.toFixed(0))