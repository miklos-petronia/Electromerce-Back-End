
const { Product } = require('../models');

const productData = [
    {
        product_name: 'T-Shirt',
        price: 15.99,
        stock: 15,
        category_id: 1,
    },
    {
        product_name: 'Running Shoes',
        price: 96.0,
        stock: 27,
        category_id: 5,
    },
    {
        product_name: 'Branded Baseball Cap',
        price: 24.99,
        stock: 13,
        category_id: 4,
    },
    {
        product_name: 'Top 100 Music Compilation Vinyl Record',
        price: 13.99,
        stock: 50,
        category_id: 3,
    },
    {
        product_name: 'Cargo Shorts',
        price: 29.99,
        stock: 22,
        category_id: 2,
    },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;