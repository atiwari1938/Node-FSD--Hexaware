const express = require('express');
const bodyParser = require('body-parser');
const productController = require('./controllers/productcontroller');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());

// Routes for products
app.use('/products', productController);

app.get("/",function(req,res)
{
    res.send("Product API ");
});
app.listen(3008,function(){});
console.log("Product API is started at : http://localhost:3008");
