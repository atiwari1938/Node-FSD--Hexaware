const productModel = require('../models/productmodel');

const productService = {
  getAllProducts: function(callback) {
    productModel.getAllProducts(callback);
  },
  getProductById: function(productId, callback) {
    productModel.getProductById(productId, callback);
  }
};

module.exports = productService;
