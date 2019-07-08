/**
 * Module dependencies
 */
const { update, findById } = require('../../data/db');

const updateUser = async (request, response) => {
	// Get user id
	const userID = request.params.id;

	const newUserDetails = request.body;

	const id = await update(userID, newUserDetails);

	const updatedUserDetails = await findById(id);

	return response.status(201).json({
		data: updatedUserDetails,
		error: null
	});
};

module.exports = updateUser;
