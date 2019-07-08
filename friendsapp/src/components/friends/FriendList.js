import React from 'react';
import PropTypes from 'prop-types';
import { Friend } from './Friend';

export const FriendList = props => {
	const { friends, deleteUser } = props;

	return (
		<section>
			{friends.map(friend => {
				return <Friend key={friend.id} {...friend} deleteUser={deleteUser} />;
			})}
		</section>
	);
};

FriendList.propTypes = {
	friends: PropTypes.array.isRequired,
	deleteUser: PropTypes.func.isRequired
};
