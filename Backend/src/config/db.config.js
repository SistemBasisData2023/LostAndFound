/**
 * @file index.js
 * @description A script to establish a connection with a PostgreSQL database using environment variables.
 */

// Import required modules
const { Pool } = require('pg');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Log the database configuration values
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);

// Create a new Pool instance with the database configuration
const db = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: true,
  },
});

/**
 * @function testDatabaseConnection
 * @description Test the database connection
 */
async function testDatabaseConnection() {
  try {
    const client = await db.connect();
    console.log('Connected to the database');
    client.release();
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

// Export the testDatabaseConnection function and the db Pool instance
module.exports = {
  testDatabaseConnection,
  db,
};