// Simulating dynamic data (replace with real-time data fetching)
const transparencyPercentage = 75;
const newProductsCount = 10;
const topProducts = [
    { name: 'Product A', sales: 100, ratings: 4.5 },
    { name: 'Product B', sales: 80, ratings: 4.2 },
    { name: 'Product C', sales: 120, ratings: 4.8 }
];

// Update real-time transparency metrics
document.getElementById('transparencyPercentage').textContent = `${transparencyPercentage}%`;
document.getElementById('newProductsCount').textContent = newProductsCount;

// Update top-performing products list
const topProductsList = document.getElementById('topProductsList');
topProducts.forEach(product => {
    const listItem = document.createElement('li');
    listItem.textContent = `${product.name} - Sales: ${product.sales}, Ratings: ${product.ratings}`;
    topProductsList.appendChild(listItem);
});
