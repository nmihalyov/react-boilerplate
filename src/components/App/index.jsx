import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import AppShell from '../AppShell'
import routes from '../../routes.js';

class App extends React.PureComponent {
	render() {
		return (
			<AppShell>
				<Router>
					{routes.map(route => (
						<Route key={route.path} path={route.path} component={route.component}/>
					))}
				</Router>
			</AppShell>
		);
	}
}

export default App;