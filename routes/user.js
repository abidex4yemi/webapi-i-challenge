/**
 * Module dependents
 */
const express = require('express');
const Router = express.Router();

// Handle get all users routes [GET]
Router.get('/users', () => {});

module.exports.userRoutes = Router;
