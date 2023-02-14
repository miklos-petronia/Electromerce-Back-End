const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
    try {
        // find all tags
        // be sure to insert its related Product information
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
        // Search a single tag by its `identifier`
        // be sure to insert its related Product data information
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

router.post("/", async (req, res) => {
    try {
        // develop a new tag
        const createTag = await Tag.create({
            tag_name: req.body.tag_name,
        });
        res.json(createTag);
    } catch (err) {
        res.json(err);
    }
});


router.put("/:id", async (req, res) => {
    try {
        // update a tag's name by its `identifier` element
        const updateTag = await Tag.update({
            tag_name: req.body.tag_name,
        }, {
            where: {
                id: req.params.id,
            },
        });
        res.json(updateTag);
    } catch (err) {
        res.json(err);
    }
});

router.delete('/:id', async (req, res) => {
    // remove a tag by its `identifier` element
    try {
        const tagDeleted = await Tag.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.json(tagDeleted);
    } catch (err) {
        res.json(err);
    }
});


module.exports = router;