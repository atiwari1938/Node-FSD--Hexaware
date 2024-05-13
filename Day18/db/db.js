
require('dotenv').config();
 
var Sequelize = require("sequelize");

var db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        dialect: "mysql",
        host: process.env.DB_HOST,
    }
);
async function testConnection() {
    try {
        await db.authenticate();
        console.log("Database connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

testConnection();
module.exports = db;
