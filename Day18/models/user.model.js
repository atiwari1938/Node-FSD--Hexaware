
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const db = require('../db/db');

const User = db.define(
  'Users',
  {id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }},
  {
    freezeTableName: true,
    timestamps:false,
},
);
User.beforeCreate(async (user) => {
  console.log('Before create hook called with user:', user);
  try {
    if (user.password) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
    }
  } catch (error) {
    console.error('Error hashing password:', error);
  }
});
module.exports = User;
