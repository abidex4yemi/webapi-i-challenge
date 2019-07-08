import React from 'react';
import PropTypes from 'prop-types';

export const Friend = props => {
	const { id, name, bio } = props;

	return (
		<div>
			<h3>Name: {name}</h3>
			<p>Biography: {bio}</p>
			<button type="button">Delete</button>
			<button type="button">Update</button>
		</div>
	);
};

Friend.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	bio: PropTypes.string.isRequired
};
