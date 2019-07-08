/**
 * Module dependencies
 */
const { remove, find } = require('../../data/db');

/**
 * Delete a user record
 * 
 * @param {object} request 
 * @param {object} response 
 */
const deleteUser = async (request, response, next) => {
	const { id } = request.params;

	const deletedUserId = await remove(id);

	if (!deletedUserId) {
		const error = new Error();
		error.message = `User with ID ${id} does not exist`;
		return next(error);
	}

	const users = await find();

	return response.status(200).json({
		data: users,
		error: null
	});
};

module.exports = deleteUser;
