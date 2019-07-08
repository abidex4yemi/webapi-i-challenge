/**
 * Module dependencies
 */
const express = require('express');
const { userRoutes } = require('./routes/user');

/**
 * Module constants
 */
const PORT = process.env.PORT || 3000;

// Initializes express app
const app = express();

/**
 * App middleware setup
 */

// parse application/json
// parse url-encoded
app.use(express.json());

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

// Handle users route
app.use('/api/v1', userRoutes);

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
