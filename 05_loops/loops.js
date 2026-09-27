//Array specific loops for of loops
const map = new Map()
map.set("USA","United States Of America")
map.set("IND","India")
//console.log(map)

//using for-of loops on a map object (can't be used on a normal object, we use for-in loops for normal objects but can't use for-in on map obj)
for (const [key,value] of map){
    //console.log(key , ":-", value)
}

//for in loop
const myObj={
    jS:"javascript",
    Cpp:"C++",
    ios:"Apple Operating System"

}
for (const key in myObj) {
    //console.log(key, ":-", myObj[key])

}
//for-in loops only returns keys on objects and on arrays. Whereas for of loop returns values on arrays and dont work on objects.

//for-each loop (Used most commonly with arrays)
const arr =[1,2,3,4,5,6,7,8,9,0]
arr.forEach((item)=>{
    //console.log(item)

})

// passing on a function in a forEach loop
const printMe=(item)=>{
    //console.log(item)
}
arr.forEach(printMe) //forEach will pick array values and insert into function parametre

//forEach can take parameteres such as 1-array values, 2-array indexes, 3-entire array
arr.forEach((item,index,arrlist)=>{
    //console.log(item," : ",index," : ",arrlist)
})

//forEach for array of objects (VERY COMMON AND IMPORTANT)
const newObj= [
    {
        LanguageName:"Javascript",
        LanguageShort:"JS"
    },{
        LanguageName:"Python",
        LanguageShort:"Py"
    },{
        LanguageName:"Cpp",
        LanguageShort:"C++"
    }
]
newObj.forEach((item)=>{
    console.log(item.LanguageName)
})