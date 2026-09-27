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

//forEach for array of objects (VERY COMMON AND IMPORTANT) (cannot be stored in a variable)
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
    //console.log(item.LanguageName)
})
//.filter(). work same as forEach just needs a condition to work and can be stored in a variable unlike forEach.
const arr2=[1,2,3,4,5]
const filtered= arr2.filter((num)=>{return num>2})
//console.log(filtered)

const booksCollection = [
  {
    title: "The Hobbit",
    genre: "Fantasy",
    author: "J.R.R. Tolkien",
    publishDate: new Date("1937-09-21")
  },
  {
    title: "Dune",
    genre: "Sci-Fi",
    author: "Frank Herbert",
    publishDate: new Date("1965-08-01")
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    author: "Harper Lee",
    publishDate: new Date("1960-07-11")
  },
  {
    title: "1984",
    genre: "Dystopian",
    author: "George Orwell",
    publishDate: new Date("1949-06-08")
  },
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    author: "F. Scott Fitzgerald",
    publishDate: new Date("1925-04-10")
  },
  {
    title: "Neuromancer",
    genre: "Sci-Fi",
    author: "William Gibson",
    publishDate: new Date("1984-07-01")
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    author: "Jane Austen",
    publishDate: new Date("1813-01-28")
  },
  {
    title: "The Catcher in the Rye",
    genre: "Fiction",
    author: "J.D. Salinger",
    publishDate: new Date("1951-07-16")
  },
  {
    title: "The Fellowship of the Ring",
    genre: "Fantasy",
    author: "J.R.R. Tolkien",
    publishDate: new Date("1954-07-29")
  },
  {
    title: "Brave New World",
    genre: "Dystopian",
    author: "Aldous Huxley",
    publishDate: new Date("1932-08-30")
  }
];
const userBooks= booksCollection.filter((book)=>{
    return book.genre==="Fiction"
})
console.log(userBooks)
