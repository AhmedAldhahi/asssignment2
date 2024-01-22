class Product {
    constructor(name, price, productId, StockQuantity) {
        this.name = name;
        this.price = price;
        this.productId = productId;
        this.StockQuantity = StockQuantity
    }
    displayInfo() {
        console.log(`Product: ${this.name}, Price: $${this.price}`);
    }

    updatePrice(price){
        this.price = price;
    }



}