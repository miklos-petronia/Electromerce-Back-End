const router = require('express').Router();
const { Category, Product, Tag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
    // find all categories
    // be sure to include its associated Products
    try {
        const getAllCategories = await Category.findAll({
            attributes: ["id", "category_name"],
            include: [{
                model: Product,
                attributes: ["id", "product_name", "price", "stock", "category_id"],
            }],
        });
        res.json(getAllCategories);
    } catch (err) {
        res.json(err);
    }

});
