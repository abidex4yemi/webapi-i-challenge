import React from 'react';

export const FriendForm = props => {
	return (
		<form>
			<div>
				<input type="text" placeholder="Enter friend name" />
			</div>

			<div>
				<textarea cols="20" rows="10" />
			</div>

			<button type="button">Add</button>
		</form>
	);
};
