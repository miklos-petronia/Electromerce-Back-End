const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

 // The `/api/products` endpoint

 // Obtain all products
router.get('/', async (req, res) => {
    try {
       
        // Find every products
        // Be sure to insert its related Category and Tag data information
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

// Obatin one product
router.get('/:id', async (req, res) => {
    try {
        // Search a single product by its `identifier`
        const product = await Product.findByPk(req.params.id, {
            include: [
                { model: Category },
                { model: Tag, through: ProductTag },
            ],
        });
        res.json(product);
    } catch (err) {
        res.json(err);
    }
});

// develop new product
router.post('/', (req, res) => {
    
    Product.create(req.body)
        .then((product) => {
            // if there's product tags,  develop pairings to bulk develop in the ProductTag framework
            if (req.body.tagIds.length) {
                const productTagIdArr = req.body.tagIds.map((tag_id) => {
                    return {
                        product_id: product.id,
                        tag_id,
                    };
                });
                return ProductTag.bulkCreate(productTagIdArr);
            }
            // if there is no product tags, just answer
            res.status(200).json(product);
        })
        .then((productTagIds) => res.status(200).json(productTagIds))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});

// update product
router.put('/:id', (req, res) => {
    
// update product data information
    Product.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
        .then((product) => {
            // Search all related tags from ProductTag
            return ProductTag.findAll({ where: { product_id: req.params.id } });
        })
        .then((productTags) => {
        
        // Obtain list of present tag_ids
            const productTagIds = productTags.map(({ tag_id }) => tag_id);
            
        // Develop filtered list of new tag_ids
            const newProductTags = req.body.tagIds
                .filter((tag_id) => !productTagIds.includes(tag_id))
                .map((tag_id) => {
                    return {
                        product_id: req.params.id,
                        tag_id,
                    };
                });
        
         // find out the ones to delete
            const productTagsToRemove = productTags
                .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
                .map(({ id }) => id);

        // run both elements
            return Promise.all([
                ProductTag.destroy({ where: { id: productTagsToRemove } }),
                ProductTag.bulkCreate(newProductTags),
            ]);
        })
        .then((updatedProductTags) => res.json(updatedProductTags))
        .catch((err) => {
            // console.log(err);
            res.status(400).json(err);
        });
});

router.delete('/:id', async (req, res) => {
    // remove one product by its `identifier` element
    try {
        const productDeleted = await Product.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.json(productDeleted);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;