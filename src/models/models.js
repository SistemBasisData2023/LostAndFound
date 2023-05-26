const { db } = require('../config/db.config');

// Get data from the 'nasabah' table
async function getAllLost() {
  try {
    const query = 'SELECT * FROM users';
    const results = await db.query(query);
    return results.rows;
  } catch (err) {
    console.log(err);
    throw err;
  }
}



module.exports = {
  getAllLost
};
