// Config for React Router routes
import React from 'react';

import Component from './components/Component';

const routes = [
	{
		path: '/',
		component() {
			return (
				<Component/>
			);
		}
	}
];

export default routes;