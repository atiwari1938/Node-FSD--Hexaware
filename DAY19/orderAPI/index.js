const express = require('express');
const bodyParser = require('body-parser');
const orderController = require('./controllers/orderController');
require('dotenv').config();

const app = express();


app.use(bodyParser.json());

// Routes for orders
app.use('/orders', orderController);


app.get("/",function(req,res)
{
    res.send("Order API ");
});
app.listen(3007,function(){});
console.log("Order API is started at : http://localhost:3007");