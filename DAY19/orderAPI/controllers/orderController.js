const express = require('express');
const orderService = require('../services/orderService');

const router = express.Router();

// POST place order
router.post('/place', (req, res, next) => {
  const orderData = req.body;
  orderService.placeOrder(orderData, (err, orderId) => {
    if (err) {
      return next(err);
    }
    res.json({ orderId });
  });
});

// GET specific order by ID
router.get('/:orderId', (req, res, next) => {
  const orderId = req.params.orderId;
  orderService.getOrderById(orderId, (err, order) => {
    if (err) {
      return next(err);
    }
    res.json(order);
  });
});

// GET all orders
router.get('/', (req, res, next) => {
  orderService.getAllOrders((err, orders) => {
    if (err) {
      return next(err);
    }
    res.json(orders);
  });
});

module.exports = router;
