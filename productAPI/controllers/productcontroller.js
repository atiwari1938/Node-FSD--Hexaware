const express = require('express');
const productService = require('../services/productservice');

const router = express.Router();

// GET all products
router.get('/', (req, res, next) => {
  productService.getAllProducts((err, products) => {
    if (err) {
      return next(err);
    }
    res.json(products);
  });
});

// GET product by ID
router.get('/:productId', (req, res, next) => {
  const productId = req.params.productId;
  productService.getProductById(productId, (err, product) => {
    if (err) {
      return next(err);
    }
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }
    res.json(product);
  });
});

module.exports = router;
