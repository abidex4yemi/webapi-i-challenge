import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Friends } from '../friends/Friends';
import styled from 'styled-components';

const BASE_URL = 'http://localhost:8000/api/v1';

// Initial state
const initialFriendState = {
	friends: [],
	form: {
		name: '',
		bio: ''
	}
};

export const App = () => {
	const [state, setState] = useState(initialFriendState);

	useEffect(() => {
		getAllFriends().then(response => {
			setState(prevState => ({
				...prevState,
				friends: response.data
			}));
		});
	}, []);

	const getAllFriends = () => {
		return axios
			.get(`${BASE_URL}/users`)
			.then(response => response.data)
			.catch(error => error);
	};

	const deleteUser = id => {
		axios
			.delete(`${BASE_URL}/users/${id}`)
			.then(response => {
				const { data } = response.data;

				setState(prevState => ({
					...prevState,
					friends: data
				}));
			})
			.catch(error => error);
	};

	return (
		<main>
			<ContainerStyled>
				<Friends friends={state.friends} deleteUser={deleteUser} />
			</ContainerStyled>
		</main>
	);
};

const ContainerStyled = styled.div`
	width: 80%;
	margin: 0 auto;
`;
