const product1 ={
    name:"ABC Jelly",
    price:50,
    supplier:{
        name:"Hilal Foods",
        address:"Korangi Industries"
    }
}
//making a copy of product 1 using spread operator. any change in product2 will not update product1, except its nested objects
const product2={...product1}
product2.price=2000
//console.log(product1.price) //remains unchanged. aka 50
product2.supplier.name="Cocomo" //product 1 supplier name also changed cause its a nested object
//console.log(product1.supplier.name)

const product3= structuredClone(product1) //truly independent copy
product3.supplier.name="Bisconni" //this wont change product1's supplier.name
console.log(product3.supplier.name)
console.log(product1.supplier.name)