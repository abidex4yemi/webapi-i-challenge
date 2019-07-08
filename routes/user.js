/**
 * Module dependents
 */
const express = require('express');
const Router = express.Router();
const { getAllUsers } = require('../controllers/users');

// Handle get all users routes [GET]
Router.get('/users', getAllUsers);

module.exports.userRoutes = Router;
