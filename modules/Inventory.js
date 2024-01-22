class Inventory {
    //can find location or name

    updateProduct(productId, name, price, stockQuantity) {
        const productToUpdate = this.products.find((product) => product.productId === productId)

        if(productToUpdate){
            productToUpdate.price = price;
            productToUpdate.stockQuantity = stockQuantity;
        } else {
            console.log(`Product with ID ${productId} not found.`);
        }
    }

    addProduct(product) {
        this.products.push(product);
    }

    //have an option to display all item with their id and then you can choose to update the item based on the id you type



    displayInventory() {
        console.log("Inventory:");
        this.products.forEach((product, index) => {
            console.log(`[${index + 1}]`);
            product.displayInfo();
        });
    }


}