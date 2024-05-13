const sequelize = require('sequelize');
const db = require('../db/db');

var Department =db.define(
    "departments",
    {
        id:{type:sequelize.INTEGER,primaryKey:true},
        name:{type:sequelize.STRING}
    },
    {
        freezeTableName: true,
        timestamps:false,
    }
);

module.exports=Department;  