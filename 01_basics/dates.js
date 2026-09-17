console.log("Hamza")
const date = new Date(2026,8,17,10,28,4)
console.log("*****************************Printing**************************************************")
console.log("Full Year: ",date.getFullYear())
console.log("Month: ",date.getMonth())
console.log("Date: ",date.getDate())
console.log("Hours: ",date.getHours())
console.log("Minutes: ",date.getMinutes())
console.log("Seconds: ",date.getSeconds())

console.log("*****************************Formatting**************************************************") 
console.log("Date String: ",date.toDateString())
console.log("ISO String: ", date.toISOString())
console.log("Locale Date String: ", date.toLocaleDateString())
console.log("Locale String: ", date.toLocaleString())

console.log("*****************************Date.now() and getTime()**************************************************") 
console.log("Date.now(): ",Date.now()) //gives time stamp in milliseconds from 1970 january
console.log("date.getTime(): ",date.getTime()) //gives time stamp in milliseconds from the date I mentioned

console.log("*****************************Date.now() and getTime() Simple Comparision**************************************************") 
const expiryDate = new Date(2026, 5, 20);

if (Date.now() > expiryDate.getTime()) {
    console.log("Expired");
} else {
    console.log("Still valid");
}
