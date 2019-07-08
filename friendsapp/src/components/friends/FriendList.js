import React from 'react';
import PropTypes from 'prop-types';
import { Friend } from './Friend';

export const FriendList = props => {
	const { friends } = props;

	return (
		<section>
			{friends.map(friend => {
				return <Friend key={friend.id} {...friend} />;
			})}
		</section>
	);
};

FriendList.propTypes = {
	friends: PropTypes.array.isRequired
};
