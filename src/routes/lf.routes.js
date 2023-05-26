const express = require('express');
const router = express.Router();
const db = require('../models/models');
const lfController = require('../controllers/lf.controllers');

// Define your routes here
router.get('/admin/getuser', lfController.getAllLost);
module.exports = router;
