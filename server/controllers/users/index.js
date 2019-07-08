/**
 * Module dependencies
 */
const getAllUsers = require('./getAllUsers');
const getSingleUser = require('./getSingleUser');
const createUser = require('./createUser');
const updateUser = require('../../controllers/users/updateUser');
const deleteUser = require('../../controllers/users/deleteUser');

module.exports = {
	getAllUsers,
	getSingleUser,
	createUser,
	updateUser,
	deleteUser
};
