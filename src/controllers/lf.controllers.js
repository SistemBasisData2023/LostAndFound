const db = require('../models/models');

// Login as admin
async function loginAdmin(req, res) {
  const { username, password } = req.body;
  try {
    const admin = await db.loginAdmin(username, password, req, res);
    res.send(admin);
  } catch (err) {
    if (err.message === 'Invalid username or password') {
      return res.status(404).send('Invalid username or password');
    }
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}

// Login a user
async function loginUser(req, res) {
  const { username, password } = req.body;

  try {
    const user = await db.loginUser(username, password, req, res);
    res.send(user);
  } catch (err) {
    if (err.message === 'Invalid username or password') {
      return res.status(404).send('Invalid username or password');
    }
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}
async function logoutUser(req, res) {
  try {
    req.session.destroy();
    res.send('User logged out successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}
async function addLostItem(req, res) {
  const { item_name, description, location_lost, date_lost } = req.body;
  const user_id = req.session.user.user_id;
  try {
    const data = await db.addLostItem(item_name, description, location_lost, date_lost, user_id);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
}

// Add a found item
async function addFoundItem(req, res) {
  const { item_name, description, location_found, date_found, location_submitted } = req.body;
  const user_id = req.session.user.user_id;
  try {
    const data = await db.addFoundItem(item_name, description, location_found, date_found, user_id, location_submitted);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
}

// Get data from the 'users' table
async function getAllUser(req, res) {
  try {
    const data = await db.getAllUser();
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
}

// Get data from the 'lost' table
async function getAllLost(req, res) {
  try {
    const data = await db.getAllLost();
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
}

// Get data from the 'found' table
async function getAllFound(req, res) {
  try {
    const data = await db.getAllFound();
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
}

// Register a new user
async function registerUser(req, res) {
  const { username, email, password } = req.body;
  try {
    const data = await db.registerUser(username, email, password);
    res.send(data);
  } catch (err) {
    if (err.message === 'Username already exists') {
      return res.status(404).send('Username already exists');
    }
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = {
  loginAdmin,
  loginUser,
  logoutUser,
  addLostItem,
  addFoundItem,
  getAllLost,
  getAllFound,
  getAllUser,
  registerUser,
};
