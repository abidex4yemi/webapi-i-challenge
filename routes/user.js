/**
 * Module dependents
 */
const express = require('express');
const Router = express.Router();
const { getAllUsers, getSingleUser } = require('../controllers/users');

// Handle get all users routes [GET]
Router.get('/users', getAllUsers);

// Handle get single user
Router.get('/users/:id', getSingleUser);

module.exports.userRoutes = Router;
