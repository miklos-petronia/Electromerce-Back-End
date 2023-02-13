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

router.post("/", async (req, res) => {
  try {
    // create a new Category
    const createCategory = await Category.create({
      category_name: req.body.category_name,
    });
    res.json(createCategory);
  } catch (err) {
    res.json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
      router.post("/", async (req, res) => {
          try {
              // create a new Category
              const createCategory = await Category.create({
                  category_name: req.body.category_name,
              });
              res.json(createCategory);
          } catch (err) {
              res.json(err);
          }
      });

      router.put("/:id", async (req, res) => {
          try {
              // update a categories name by its `id` value
              const updateCategory = await Category.update({
                  category_name: req.body.category_name,
              }, {
                  where: {
                      id: req.params.id,
                  },
              });
              res.json(updateCategory);
          } catch (err) {
              res.json(err);
          }
      });

      router.delete('/:id', async (req, res) => {
          // delete a category by its `id` value
          try {
              const categoryDeleted = await Category.destroy({
                  where: {
                      id: req.params.id,
                  },
              });
              res.json(categoryDeleted);
          } catch (err) {
              res.json(err);
          }
      });


      module.exports = router;
