
require('dotenv').config();
 
var Sequelize = require("sequelize");

var db = new Sequelize(
    process.env.Db_name,
    process.env.Db_user,
    process.env.Db_pass,
    {
        dialect: "mysql",
        host: process.env.Db_host,
    }
);
module.exports = db;
