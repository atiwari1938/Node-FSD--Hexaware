const db = require('../database/db');

const Product = {
  getAllProducts: function(callback) {
    db.query('SELECT * FROM Products', (err, rows) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, rows);
    });
  },
  getProductById: function(productId, callback) {
    db.query('SELECT * FROM Products WHERE pid = ?', [productId], (err, rows) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, rows[0]);
    });
  }
};

module.exports = Product;
