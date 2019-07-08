import React from 'react';
import PropTypes from 'prop-types';
import { FriendList } from './FriendList';
import { FriendForm } from './FriendForm';

export const Friends = props => {
	const { friends } = props;

	return (
		<main>
			<FriendList friends={friends} />
			<div>
				<FriendForm />
			</div>
		</main>
	);
};

Friends.propTypes = {
	friends: PropTypes.array.isRequired
};
