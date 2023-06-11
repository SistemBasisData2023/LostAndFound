const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../models/models');
const lfController = require('../controllers/lf.controllers');

// Landing page
router.get('/', (req, res) => {
    res.send('Welcome to the Lost and Found API');
});

// Logout a user
router.get('/logout', lfController.logoutUser);

//=======Admin Routes=======//
// Login as admin
router.post('/admin/login', lfController.loginAdmin);
// Get all users
router.get('/admin/getuser', lfController.getAllUser);
// Delete a lost item
router.delete('/admin/deletelost', lfController.deleteLostItem);
// Delete a found item
router.delete('/admin/deletefound', lfController.deleteFoundItem);

//=======User Routes=======//
// Login a user
router.post('/user/login', lfController.loginUser);
// Define your user routes here
router.post('/user/register', lfController.registerUser);
  
// Add a lost item
router.post('/user/insertlost', lfController.addLostItem);
// Add a found item
router.post('/user/insertfound', lfController.addFoundItem);


//=======General Routes=======//
// Define your general routes here
// Get all lost items
router.post('/getlost', lfController.getAllLost);
// Get all found items
router.post('/getfound', lfController.getAllFound);
// Get user profile
router.get('/profile', lfController.showProfile);


module.exports = router;
