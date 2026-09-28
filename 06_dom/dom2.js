//Using a function to add element and innerhtml
const addLang = (lang)=>{
    const addElement = document.createElement('li')
    addElement.innerHTML=`${lang}`
    document.querySelector('.language').appendChild(addElement)

}
addLang("Python")
addLang("C++")

//but we have learned to use text node as an optimized way

const addOptLang = (lang) =>{
    const addElement = document.createElement('li')
    const addText = document.createTextNode(`${lang}`)
    addElement.appendChild(addText)
    document.querySelector(".language").appendChild(addElement)
}
addOptLang("assembly Langauge")
addOptLang("Java")

// We have learned to create and add values.Now we will learn to edit values using dom
//Lets create a function to edit the second list element
const secondEdit=(replaceLang)=>{
    const oldLi = document.querySelector('li:nth-child(2)')
    const newLi = document.createElement('li')
    newLi.textContent= `${replaceLang}`
    oldLi.replaceWith(newLi)
    
}
secondEdit("React")
 //or simply without a function
 const oldOne = document.querySelector('li:nth-child(1)')
 oldOne.outerHTML="<li>Typescript</li>"

 //remove
 const removeLang = document.querySelector("li:last-child")
 removeLang.remove()