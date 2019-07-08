/**
 * Module dependencies
 */
const { remove } = require('../../data/db');

const deleteUser = async (request, response) => {
	const { id } = request.params;

	const deletedUser = await remove(id);

	return response.status(200).json({
		data: [{ id: deletedUser }],
		error: null
	});
};

module.exports = deleteUser;
