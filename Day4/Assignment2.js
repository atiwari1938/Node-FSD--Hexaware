let products = [
    { id: 1, pname: 'Candy', price: 10, qty: 5, category: 'Category A' },
    { id: 2, pname: 'Cereal', price: 50, qty: 0, category: 'Category B' },
    { id: 3, pname: 'Cold Drink', price: 30, qty: 3, category: 'Category A' },
    { id: 4, pname: 'Chips', price: 20, qty: 8, category: 'Category C' },
];

// a. Display the product details based on the given product id
function displayProductById(id) {
    const product = products.find(product => product.id === id);
    if (product) {
        console.log(product);
    } else {
        console.log("Product not found");
    }
}

// b. Display the product names and unit price based on the given category
function displayProductsByCategory(category) {
    const filteredProducts = products.filter(product => product.category === category);
    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            console.log(`Product Name: ${product.pname}, Unit Price: ${product.price}`);
        });
    } else {
        console.log("No products found in the given category");
    }
}

// c. Add new product to array
function addProduct(product) {
    products.push(product);
}

// d. Delete the product based on the product id
function deleteProductById(id) {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        console.log("Product deleted successfully");
    } else {
        console.log("Product not found");
    }
}

// e. Display the product details based on the range of price (min, max)
function displayProductsByPriceRange(min, max) {
    const filteredProducts = products.filter(product => product.price >= min && product.price <= max);
    if (filteredProducts.length > 0) {
        console.log(filteredProducts);
    } else {
        console.log("No products found in the given price range");
    }
}

// f. Display out of stock products (i.e qty is zero)
function displayOutOfStockProducts() {
    const outOfStockProducts = products.filter(product => product.qty === 0);
    if (outOfStockProducts.length > 0) {
        console.log(outOfStockProducts);
    } else {
        console.log("No out of stock products found");
    }
}

// g. Perform sorting the array based on the price
function sortProductsByPrice() {
    products.sort((a, b) => a.price - b.price);
}
