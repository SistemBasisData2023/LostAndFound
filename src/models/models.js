const { db } = require('../config/db.config');
const { get } = require('../routes/lf.routes');

// Login as admin
async function loginAdmin(username, password, req, res) {
  const query = 'SELECT * FROM users WHERE username = $1 AND password = $2 AND role = $3';
  const values = [username, password, 'admin'];
  try {
    const result = await db.query(query, values);
    const admin = result.rows[0];
    if(!admin) {
      throw { statusCode: 404, message: 'Invalid username or password' };
    }
    // Create session and store user data
    req.session.admin = admin;
    console.log(req.session.admin);
    res.send('Admin logged in successfully');
  } catch (err) {
    console.error(err);
    res.status(404).send('Invalid username or password');
  }
}

// Login a user
async function loginUser(username, password, req, res) {
  const query = 'SELECT * FROM users WHERE username = $1 AND password = $2';
  const values = [username, password];

  try {
    const result = await db.query(query, values);
    const user = result.rows[0];

    if (!user) {
      // User not found
      throw { statusCode: 404, message: 'Invalid username or password' };
    }

    // Create session and store user data
    req.session.user = user;
    console.log(req.session.user);
    res.send('User logged in successfully');
  } catch (err) {
    console.error(err);
    res.status(404).send('Invalid username or password');
  }
}

// Register a new user
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
    return 'User created successfully';
  } catch (err) {
    console.log(err);
    throw err;
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

// ADD FUNCTION STARTS HERE
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
// add Found item
async function addFoundItem(item_name, description, location_found, date_found, user_id, location_submitted){
  try{
  const query =  'INSERT INTO founditems (item_name, description, location_found, date_found, user_id, location_submitted) VALUES ($1, $2, $3, $4, $5, $6) RETURNING found_item_id';
  const values = [item_name, description, location_found, date_found, user_id, location_submitted];
  const result = await db.query(query, values);
  const foundId = result.rows[0].found_item_id; // Retrieve the lost_item_id from the result
  return `Found item with ID ${foundId} added successfully`;
  } catch (err) {
    console.log(err);
    throw err;
  }
}





// GET FUNCTION STARTS HERE

// Get data from the 'users' table
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

// Get data from the 'lost' table
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

// Get data from the 'found' table
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
};
