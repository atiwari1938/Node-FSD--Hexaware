const orderModel = require('../models/orderModel');

const orderService = {
  placeOrder: function(orderData, callback) {
    orderModel.placeOrder(orderData, callback);
  },
  getAllOrders: function(callback) {
    orderModel.getAllOrders(callback);
  },
  getOrderById: function(orderId,callback){
    orderModel.getOrderById(orderId,callback);
  }
};

module.exports = orderService;
