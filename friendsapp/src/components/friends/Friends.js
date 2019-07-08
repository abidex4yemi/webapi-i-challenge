import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FriendList } from './FriendList';
import { FriendForm } from './FriendForm';

export const Friends = props => {
	const { friends, deleteUser } = props;

	return (
		<FriendsStyled>
			<FriendList friends={friends} deleteUser={deleteUser} />
			<div>
				<FriendForm />
			</div>
		</FriendsStyled>
	);
};

Friends.propTypes = {
	friends: PropTypes.array.isRequired,
	deleteUser: PropTypes.func.isRequired
};

const FriendsStyled = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 100px;
`;
