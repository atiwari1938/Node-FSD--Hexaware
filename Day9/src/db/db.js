const mysql = require('mysql2/promise');
require('dotenv').config();

const mysqlPool = mysql.createPool({
    host: process.env.Db_host,
    port: process.env.Db_porst,
    user: process.env.DB_user,
    password: process.env.DB_pass,
    database: process.env.DB_name,
    
});

mysqlPool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
    connection.release();
});

module.exports = mysqlPool;
