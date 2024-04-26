const sequelize = require('sequelize');
const db = require('../database/db');

var Employee=db.define(
    "employees",
    {
        id:{type:sequelize.INTEGER,primaryKey:true,autoIncrement: true},
        name:{type:sequelize.STRING},
        department_id:{type:sequelize.INTEGER}
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);
module.exports=Employee;