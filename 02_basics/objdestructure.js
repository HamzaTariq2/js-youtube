console.log("***********************Destructuring Objects************************")
const course={
    title:"JavaScript",
    price:100,
    instructor:"Hamza",
    level:1,
    published:true,
    views:0
}
console.log(course)
const{title,price,instructor,level,published,views}=course
console.log(title,price,instructor,level,published,views)

console.log("***********************Change variable name with destructuring************************")
const {title:t,price:p,instructor:i,level:l,published:pub,views:v}=course //new names are used for the variables here
console.log(t,p,i,l,pub,v) //new variable names are used here
console.log(title,price,instructor,level,published,views) //original variable names are still intact

console.log("***********************APIs overview************************")
//Theory: APIs are a set of functions that allow us to access data and interact with external software components, operating systems, or microservices. In JavaScript, APIs can be used to fetch data from a server, manipulate the DOM, or interact with browser features. Common examples include the Fetch API for making network requests and the DOM API for manipulating HTML elements.