/**
 * Module dependencies
 */
const { findById } = require('../../data/db');

const getSingleUser = async (request, response) => {
	// get requested user id
	const { id } = request.params;

	const user = await findById(id);

	// Check if user with request ID is found
	if (user.length === 0) {
		return response.status(404).json({
			data: [],
			error: 'Bad: request user not found'
		});
	}

	return response.status(200).json({
		data: user,
		error: null
	});
};

module.exports = getSingleUser;
