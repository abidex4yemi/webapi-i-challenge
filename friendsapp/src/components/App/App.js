import React, { useState, useEffect } from 'react';

// Initial state
const initialFriendState = {
	friends: []
};

export const App = () => {
	const [state, setState] = useState(initialFriendState);

	return <div>Welcome</div>;
};
