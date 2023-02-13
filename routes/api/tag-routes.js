const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
    try {
        // find all tags
        // be sure to include its associated Product data
        const getAllTags = await Tag.findAll({
            attributes: ["id", "tag_name"],
            include: [{
                model: Product,
                attributes: ["id", "product_name", "price", "stock", "category_id"],
                through: "ProductTag",
            }],
        });
        res.json(getAllTags);
    } catch (err) {
        res.json(err);
    }
});
router.get('/:id', async (req, res) => {
    try {
        // find a single tag by its `id`
        // be sure to include its associated Product data
        const getTagById = await Tag.findByPk(req.params.id, {
            include: [{
                model: Product,
                attributes: ["id", "product_name", "price", "stock", "category_id"],
                through: "ProductTag",
            }],
        });
        res.json(getTagById);
    } catch (err) {
        res.json(err);
    }
});