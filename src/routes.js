// Config for React Router routes
import React from 'react';

import MainPage from './pages/main.jsx';

const routes = [
	{
		path: '/',
		page() {
			return (
				<MainPage/>
			);
		}
	}
];

export default routes;