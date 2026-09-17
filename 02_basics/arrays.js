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