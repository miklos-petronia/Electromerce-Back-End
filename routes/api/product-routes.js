const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
    try {
        // find all products
        // be sure to include its associated Category and Tag data
        const getProducts = await Product.findAll({
            include: [
                { model: Category },
                { model: Tag, through: ProductTag },
            ],
        });
        res.json(getProducts);
    } catch (err) {
        res.json(err);
    }
});