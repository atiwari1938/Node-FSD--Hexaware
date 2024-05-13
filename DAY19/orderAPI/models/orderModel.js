const db = require('../database/db');

const Order = {
  placeOrder: function(pid, quantity, totalAmount, callback) {
    const sql = 'INSERT INTO Orders (pid, qty, totalAmount) VALUES (?, ?, ?)';
    const values = [pid, quantity, totalAmount];

    db.query(sql, values, (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result.insertId); // Return the inserted order ID
    });
  },
  getAllOrders: function(callback) {
    db.query('SELECT * FROM Orders', (err, rows) => {
      if (err) {
        callback(err, null);
        return;
      } 
      callback(null, rows);
    });
  },
  getOrderById: function(orderId, callback) {
    db.query('SELECT * FROM Orders WHERE orderId = ?', [orderId], (err, rows) => {
      if (err) {
        callback(err, null);
        return;
      }
      if (rows.length === 0) {
        const error = new Error(`Order with ID ${orderId} not found`);
        error.statusCode = 404;
        callback(error, null);
        return;
      }
      callback(null, rows[0]);
    });
  }
};

module.exports = Order;
