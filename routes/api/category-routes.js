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

router.get('/:id', async (req, res) => {
    try {
        // find a single category by its `id`
        // be sure to include its associated Product data
        const getCategoryById = await Category.findByPk(req.params.id, {
            include: [{
                model: Product,
                attributes: ["id", "product_name", "price", "stock", "category_id"],
            }],
        });
        res.json(getCategoryById);
    } catch (err) {
        res.json(err);
    }
});

