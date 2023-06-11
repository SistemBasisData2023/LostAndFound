/**
 * @file index.js
 * @description API endpoints for user authentication and data manipulation.
 * @module controllers
 * @requires ../models/models
 */

const db = require('../models/models');

/**
 * @function loginAdmin
 * @description Log in as an admin.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
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

/**
 * @function loginUser
 * @description Log in a user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
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

/**
 * @function logoutUser
 * @description Log out a user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
async function logoutUser(req, res) {
  try {
    req.session.destroy();
    res.send('User logged out successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}

/**
 * @function addLostItem
 * @description Add a lost item.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
async function addLostItem(req, res) {
  const { item_name, description, location_lost, date_lost, user_id } = req.body;
  try {
    const data = await db.addLostItem(item_name, description, location_lost, date_lost, user_id);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
}

/**
 * @function addFoundItem
 * @description Add a found item.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
async function addFoundItem(req, res) {
  const { item_name, description, location_found, date_found, location_submitted, user_id } = req.body;

  try {
    const data = await db.addFoundItem(item_name, description, location_found, date_found, user_id, location_submitted);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
}

/**
 * @function showProfile
 * @description Show user's profile.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
async function showProfile(req, res) {
  const user_id = req.session.user.user_id;
  try {
    const data = await db.showProfile(user_id);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
}

/**
 * @function getAllUser
 * @description Get data from the 'users' table.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
async function getAllUser(req, res) {
  try {
    const data = await db.getAllUser();
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
}

/**
 * @function getAllLost
 * @description Get data from the 'lost' table.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
async function getAllLost(req, res) {
  try {
    const data = await db.getAllLost();
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
}

/**
 * @function getAllFound
 * @description Get data from the 'found' table.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
async function getAllFound(req, res) {
  try {
    const data = await db.getAllFound();
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
}

/**
 * @function registerUser
 * @description Register a new user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
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

/**
 * @function deleteLostItem
 * @description Delete a lost item.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
async function deleteLostItem(req, res) {
  const { lost_item_id } = req.body;
  try {
    const data = await db.deleteLostItem(lost_item_id);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
}

/**
 * @function deleteFoundItem
 * @description Delete a found item.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
async function deleteFoundItem(req, res) {
  const { found_item_id } = req.body;
  try {
    const data = await db.deleteFoundItem(found_item_id);
    res.send(data);
  } catch (err) {
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
  showProfile,
  deleteLostItem,
  deleteFoundItem
};
