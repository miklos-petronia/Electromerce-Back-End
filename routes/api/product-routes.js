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
// get one product
router.get('/:id', async (req, res) => {
    try {
        // find a single product by its `id`
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

// create new product
router.post('/', (req, res) => {
    /* req.body should look like this...
      {
        product_name: "Basketball",
        price: 200.00,
        stock: 3,
        tagIds: [1, 2, 3, 4]
      }
    */
    Product.create(req.body)
        .then((product) => {
            // if there's product tags, we need to create pairings to bulk create in the ProductTag model
            if (req.body.tagIds.length) {
                const productTagIdArr = req.body.tagIds.map((tag_id) => {
                    return {
                        product_id: product.id,
                        tag_id,
                    };
                });
                return ProductTag.bulkCreate(productTagIdArr);
            }