const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: Product, // Include associated Products
    });
    res.status(200).json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});


// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findByPk(categoryId, {
      include: Product, // Include associated Products
    });

    if (!category) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }

    res.status(200).json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// create a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    const updatedCategory = await Category.update(req.body, {
      where: { id: categoryId },
    });

    if (!updatedCategory[0]) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }

    res.status(200).json({ message: 'Category updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    const deletedCategory = await Category.destroy({
      where: { id: categoryId },
    });

    if (!deletedCategory) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }

    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
