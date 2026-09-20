// Your program should:

// Convert price into a number.
// Convert quantity into a number.
// Calculate the total price.
// Print:
// the total
// its data type

const price = "499";
const quantity = "2";

const totalPrice = Number(price) + Number(quantity)
// console.log(totalPrice)
// console.log(typeof totalPrice)

// Write code that calculates the discount amount and then the final price.
const OriginalPrice = 1499;
const discount = 20;
const DiscountAmount = OriginalPrice * discount / 100
const finalPrice = OriginalPrice - DiscountAmount
// console.log("Discount: ",DiscountAmount)
// console.log("Final Price: ",finalPrice)

// Without changing the original message, create code that:

// Prints the message in uppercase
// Prints the message in lowercase
// Prints whether the message includes "awesome"
// Prints the number of characters in the message
const message = "JavaScript is awesome";
// console.log(message.toUpperCase())
// console.log(message.toLowerCase())
// console.log(message.includes("awesome"))
// console.log(message.length)

// Write code to:

// Extract "hamza" from the email.
// Extract "example.com" from the email.
// Print both.

const email = "hamza@example.com";
const name = email.slice(0, 5)
const email2 = email.slice(6)
// console.log(name)
// console.log(email2)

// Write code that prints:

// The number rounded to the nearest integer
// The number rounded down
// The number rounded up

const number = 7.8;
// console.log(Math.round(number))
// console.log(Math.ceil(number))
// console.log(Math.floor(number))

// Then print:

// The full date
// The current year
// The current month
// The current day of the month
//  const date = new Date()
//  console.log(date.getDate())
//  console.log(date.toLocaleString())
//  console.log(date.getFullYear())
//  console.log(date.getMonth())
//  console.log(date.getDay())

//  Write code that:

// Prints the first fruit.
// Prints the last fruit.
// Adds "Grapes" to the end.
// Removes the first fruit.
// Prints the final array.

//Task: Using only array concepts/methods you have already covered, find the cheapest price in the array and print it.
const prices = [120, 450, 80, 999, 250];
const lowestPrice = Math.min(...prices)
// console.log(lowestPrice)

const user = {
    name:"Hamza",
    age : 20
}
user.age=21
user.country = "Pakistan"
console.log(user)
