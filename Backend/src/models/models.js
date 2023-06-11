const { db } = require('../config/db.config');
const { get } = require('../routes/lf.routes');

/**
 * Logs in as an admin.
 *
 * @param {string} username - The admin's username.
 * @param {string} password - The admin's password.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
async function loginAdmin(username, password, req, res) {
  const query = 'SELECT * FROM users WHERE username = $1 AND password = $2 AND role = $3';
  const values = [username, password, 'admin'];
  try {
    const result = await db.query(query, values);
    const admin = result.rows[0];
    if (!admin) {
      throw { statusCode: 404, message: 'Invalid username or password' };
    }
    // Create session and store user data
    req.session.admin = admin;
    console.log(req.session.admin);
    res.send(admin);
  } catch (err) {
    console.error(err);
    res.status(404).send('Invalid username or password');
  }
}

/**
 * Logs in a user.
 *
 * @param {string} username - The user's username.
 * @param {string} password - The user's password.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
async function loginUser(username, password, req, res) {
  const query = 'SELECT * FROM users WHERE username = $1 AND password = $2 AND role = $3';
  const values = [username, password, 'user'];
  try {
    const result = await db.query(query, values);
    const user = result.rows[0];
    if (!user) {
      throw { statusCode: 404, message: 'Invalid username or password' };
    }
    // Create session and store user data
    req.session.user = user;
    console.log(req.session.user);
    res.send(user);
  } catch (err) {
    console.error(err);
    res.status(404).send('Invalid username or password');
  }
}

/**
 * Registers a new user.
 *
 * @param {string} username - The username of the new user.
 * @param {string} email - The email of the new user.
 * @param {string} password - The password of the new user.
 * @returns {string} - A success message.
 * @throws Will throw an error if the username already exists.
 */
async function registerUser(username, email, password) {
  const role = 'user'; // Assigning 'user' role by default

  try {
    // Check if the username already exists
    const usernameExistsQuery = 'SELECT COUNT(*) FROM users WHERE username = $1';
    const usernameExistsResult = await db.query(usernameExistsQuery, [username]);

    if (usernameExistsResult.rows[0].count > 0) {
      throw {
        statusCode: 404,
        message: 'Username already exists',
      };
    }

    const insertQuery = 'INSERT INTO users (username, email, password, role) VALUES ($1, $2, $3, $4) RETURNING user_id';
    const values = [username, email, password, role];
    const result = await db.query(insertQuery, values);
    return 'User created successfully' + result.rows[0].user_id;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

/**
 * Logs out a user.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
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
 * Adds a new lost item.
 *
 * @param {string} item_name - The name of the lost item.
 * @param {string} description - The description of the lost item.
 * @param {string} location_lost - The location where the item was lost.
 * @param {string} date_lost - The date when the item was lost.
 * @param {number} user_id - The ID of the user who lost the item.
 * @returns {string} - A success message with the ID of the added lost item.
 * @throws Will throw an error if an error occurs while adding the lost item.
 */
async function addLostItem(item_name, description, location_lost, date_lost, user_id) {
  try {
    const query = 'INSERT INTO lostitems (item_name, description, location_lost, date_lost, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING lost_item_id';
    const values = [item_name, description, location_lost, date_lost, user_id];
    const result = await db.query(query, values);
    const lostId = result.rows[0].lost_item_id; // Retrieve the lost_item_id from the result

    return `Lost item with ID ${lostId} added successfully`;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

/**
 * Adds a new found item.
 *
 * @param {string} item_name - The name of the found item.
 * @param {string} description - The description of the found item.
 * @param {string} location_found - The location where the item was found.
 * @param {string} date_found - The date when the item was found.
 * @param {number} user_id - The ID of the user who found the item.
 * @param {string} location_submitted - The location where the item was submitted.
 * @returns {string} - A success message with the ID of the added found item.
 * @throws Will throw an error if an error occurs while adding the found item.
 */
async function addFoundItem(item_name, description, location_found, date_found, user_id, location_submitted) {
  try {
    const query = 'INSERT INTO founditems (item_name, description, location_found, date_found, user_id, location_submitted) VALUES ($1, $2, $3, $4, $5, $6) RETURNING found_item_id';
    const values = [item_name, description, location_found, date_found, user_id, location_submitted];
    const result = await db.query(query, values);
    const foundId = result.rows[0].found_item_id; // Retrieve the found_item_id from the result
    return `Found item with ID ${foundId} added successfully`;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

/**
 * Retrieves the profile of a user.
 *
 * @param {number} user_id - The ID of the user.
 * @returns {object} - The profile of the user.
 * @throws Will throw an error if the user profile cannot be retrieved.
 */
async function showProfile(user_id) {
  try {
    const query = 'SELECT * FROM users WHERE user_id = $1';
    const values = [user_id];
    const result = await db.query(query, values);
    const user = result.rows[0];
    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

/**
 * Retrieves all users from the database.
 *
 * @returns {array} - An array of user objects.
 * @throws Will throw an error if the users cannot be retrieved.
 */
async function getAllUser() {
  try {
    const query = 'SELECT * FROM users';
    const results = await db.query(query);
    return results.rows;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

/**
 * Retrieves all lost items from the database.
 *
 * @returns {array} - An array of lost item objects.
 * @throws Will throw an error if the lost items cannot be retrieved.
 */
async function getAllLost() {
  try {
    const query = 'SELECT * FROM lostitems';
    const results = await db.query(query);
    return results.rows;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

/**
 * Retrieves all found items from the database.
 *
 * @returns {array} - An array of found item objects.
 * @throws Will throw an error if the found items cannot be retrieved.
 */
async function getAllFound() {
  try {
    const query = 'SELECT * FROM founditems';
    const results = await db.query(query);
    return results.rows;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

/**
 * Deletes a lost item from the database.
 *
 * @param {number} lost_item_id - The ID of the lost item to delete.
 * @returns {string} - A success message indicating the deleted lost item.
 * @throws Will throw an error if the lost item cannot be deleted.
 */
async function deleteLostItem(lost_item_id) {
  try {
    const query = 'DELETE FROM lostitems WHERE lost_item_id = $1';
    const values = [lost_item_id];
    const result = await db.query(query, values);
    return `Lost item with ID ${lost_item_id} deleted successfully`;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

/**
 * Deletes a found item from the database.
 *
 * @param {number} found_item_id - The ID of the found item to delete.
 * @returns {string} - A success message indicating the deleted found item.
 * @throws Will throw an error if the found item cannot be deleted.
 */
async function deleteFoundItem(found_item_id) {
  try {
    const query = 'DELETE FROM founditems WHERE found_item_id = $1';
    const values = [found_item_id];
    const result = await db.query(query, values);
    return `Found item with ID ${found_item_id} deleted successfully`;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = {
  loginAdmin,
  loginUser,
  logoutUser,
  addLostItem,
  addFoundItem,
  getAllUser,
  getAllLost,
  getAllFound,
  registerUser,
  showProfile,
  deleteLostItem,
  deleteFoundItem,
};
