const db = require('../models/models');

// Get data from the 'nasabah' table
async function getAllLost(req, res) {
  try {
    const data = await db.getAllLost();
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
}


module.exports = {
  getAllLost,
};
