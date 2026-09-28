//Always convert dom elements into an array for easy manipulation. An example is given below
const listItems = document.getElementsByClassName("list-item")
const convertedArray = Array.from(listItems)
//console.log(convertedArray)

//*********Traversing:**************************
//.children will bring html collection of a parent
//Similary we have parent.firstElementChild and lastElementChild that returns html of the child
//Similarly we have child.parentElement 
//child.nextElementSibling
//parent.childNodes (returns a live nodelist)(tree)
const parent = document.querySelector(".parent")
console.log(parent.children)   //it will return an HTML collection of all the divs inside a .parent class. 

//create html element in javascript
const div = document.createElement('div')
div.className = 'main'
div.style.backgroundColor = 'red'
div.style.padding = '20px'
div.style.color = 'white'
// div.innerText = 'Hamza'
//If you use element.innerText = "New Text", it wipes out all existing children inside that element 
// (including other elements, spans, or icons) and replaces them with a single string.
// If you use element.appendChild(document.createTextNode("New Text")), you smoothly append the text to the end of the element without 
//disturbing any existing child elements or event listeners.
//How to use text nodes:- U first create text node that add that to an element using append child propert
const textNode = document.createTextNode("This div was created using dom manipulation with javascript.")
div.appendChild(textNode)

// Now we have created div and did some work on it. we will append the div to document's body to see it live
document.body.appendChild(div)