const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../models/models');
const lfController = require('../controllers/lf.controllers');

// Landing page
router.get('/', (req, res) => {
    res.send('Welcome to the Lost and Found API');
});
  
// Login as admin
router.post('/admin/login', lfController.loginAdmin);
// Login a user
router.post('/user/login', lfController.loginUser);
// Logout a user
router.get('/logout', lfController.logoutUser);
// Define your user routes here
router.post('/user/register', lfController.registerUser);
  
// Add a lost item
router.post('/user/insertlost', lfController.addLostItem);
// Add a found item
router.post('/user/insertfound', lfController.addFoundItem);

// Define your admin routes here
router.get('/admin/getuser', lfController.getAllUser);

// Define your general routes here
router.post('/getlost', lfController.getAllLost);
router.post('/getfound', lfController.getAllFound);



module.exports = router;
