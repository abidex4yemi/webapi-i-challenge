/**
 * Module dependencies
 */
const express = require('express');

/**
 * Module constants
 */
const PORT = process.env.PORT || 3000;

// Initializes express app
const app = express();

// Handle home route request and response
app.get('/', (request, response) => {
	return response.status(400).json({
		data: [
			{
				message: 'Welcome to friends api...'
			}
		],
		error: null
	});
});

// Handle invalid endpoint request
app.all('*', (request, response) => {
	return response.status(400).json({
		data: [
			{
				message: 'Route does not exist...'
			}
		],
		error: null
	});
});

app.listen(PORT, console.log(`Server running on port: ${PORT}`));
