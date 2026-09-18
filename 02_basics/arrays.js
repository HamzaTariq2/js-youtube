console.log("*************************Spread Operator*****************************")
const marvel_heroes = ["thor","iron man","captain america","hulk"]
const dc_heroes =["batman","superman","spiderman","flash"]
const merged_heroes =[...marvel_heroes,...dc_heroes]
console.log(merged_heroes)

console.log("******************************Flatten nested arrays into a signle array*****************************")
const nested_array=[1,2,3,[4,5,6],7,[8,9,[10,11,12]]]
const flatten_array = nested_array.flat(Infinity)
console.log("Flatten array: ",flatten_array)

console.log("***********************Change a value to an array**********************************")
const randomValue ="Hamza"
console.log(Array.from(randomValue))
console.log(Array.from({name:"Hamza"})) //Interesting case, it will return an empty array unless we specify whether we want an array of keys or its values from an object.

console.log("**********************combining non array values into a single array*****************")
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))