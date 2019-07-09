/**
 * Model dependencies
 */
const { find } = require('../../data/db');

/**
 * Return all users from users table
 * 
 * @param {object} request 
 * @param {object} response 
 */
const getAllUsers = async (request, response) => {
	// get all users
	const users = await find();

	return response.status(200).json({
		data: users,
		error: null
	});
};

module.exports = getAllUsers;
