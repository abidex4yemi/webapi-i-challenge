/**
 * Module dependencies
 */
const { insert, findById } = require('../../data/db');

const createUser = async (request, response) => {
	// Get user details from request body
	const userDetails = request.body;

	// Insert new user
	const { id } = await insert(userDetails);

	// Find the newly created user
	const createdUser = await findById(id);

	return response.status(201).json({
		data: createdUser,
		error: null
	});
};

module.exports = createUser;
