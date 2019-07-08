/**
 * Module dependencies
 */
const getAllUsers = require('./getAllUsers');
const getSingleUser = require('./getSingleUser');
const createUser = require('./createUser');
const updateUser = require('../../controllers/users/updateUser');

module.exports = {
	getAllUsers,
	getSingleUser,
	createUser,
	updateUser
};
