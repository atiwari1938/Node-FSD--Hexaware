import sequelize from "./database/db.js";

async function testDatabaseConnection() {
  try {
    // Test the connection to the database
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Call the function to test the database connection
testDatabaseConnection();
