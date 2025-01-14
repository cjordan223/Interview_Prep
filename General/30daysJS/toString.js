// You are building an e-commerce application. Each Product in the store has a
// category . Your task is to create a Product class that includes: name, price, and

// 1. A constructor to initialize the name, price, and category.
// 2. A custom toString() method that returns a string in the following format:


class Product {

    constructor(name, price, category){
        this.name = name;
        this.price = price;
        this.category = category;
    }

    toString(){
        
    }
}
// arduino

// "Product: [namel, Category: [category], Price: $[pricel"  

// 3. Create at least two product instances and log their string representations using toString().

// Example Output

// If you create a product like this:

// javascript

// const apple = new Product("Apple", 1.5, "Fruit");

// Calling apple.toString() should return:

 
 
// "Product: Apple, Category: Fruit, Price: $1.5"