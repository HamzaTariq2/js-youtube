//Prototype: Reusing one object methods into another
// const productMethods= {
//     displayDetails(name,price){
//         this.name=name,
//         this.price=price,
//         console.log(`The product's name is ${name} and its price is ${price}`)
//     },
//     applyDiscount(percentage){
//         this.percentage=percentage
//         console.log(`${this.name}'s price is reduced by ${percentage}% and the new price is = ${this.price - this.price * (percentage/100)}`);
//         this.price = this.price - (this.price * (percentage/100))
//     }
// }
// const product1= Object.create(productMethods)
// const product2=Object.create(productMethods)

// product1.displayDetails("Rice",1000)
// product1.applyDiscount(10)

// product2.displayDetails("Sugar",200)
// product2.applyDiscount(10)

//.call() method to use a function with an object
function showProduct(){console.log(`The product's name is ${this.name}, its price is ${this.price} and the quantity in stock
        is ${this.quantity}`)}
    
const product1= {
    name:"Rice",
    price:1000,
    quantity:20
}
const product2 = {
    name:"Sugar",
    price:200,
    quantity:50
}
// showProduct.call(product1)
// showProduct.call(product2)

//if we want to store these in a variable we will use bind(). the variable will work as a method
const bindMethodExample = showProduct.bind(product1)
//bindMethodExample()

//static 
class Vendor{
    static totalVendors=0
    constructor(name,city,paymentDue){
        this.name=name
        this.city=city
        this.paymentDue=paymentDue
        Vendor.totalVendors++
    }
    displayDetails(){
        console.log(`The vendor details are: Name:${this.name}, City:${this.city} and Payment Due:${this.paymentDue}`)
    }
    static showTotalVendors(){
        console.log(`The total vendors are: ${Vendor.totalVendors}`)
    }
}
const vendor1=new Vendor("Pepsi","Karachi","20-10-2026")
const vendor2=new Vendor("Coke","Karachi","26-10-2026")
const vendor3=new Vendor("Bisconni","Karachi","01-11-2026")

//vendor1.displayDetails()
// vendor2.displayDetails()
// vendor3.displayDetails()

// Vendor.showTotalVendors()
//setTimeout(vendor1.displayDetails,1000) //using an object's method in a callback requires bind
const bindMethodExample2 = vendor1.displayDetails.bind(vendor1)
setTimeout(bindMethodExample2,1000)