/**
 * Module dependents
 */
const express = require('express');
const Router = express.Router();
const { getAllUsers, getSingleUser, createUser } = require('../controllers/users');

// [GET] Handle get all users routes
Router.get('/users', getAllUsers);

// [GET] Handle get single user
Router.get('/users/:id', getSingleUser);

// [POST] Handle create new user request
Router.post('/users', createUser);

module.exports.userRoutes = Router;
