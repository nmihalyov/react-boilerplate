import React from 'react';
import {Provider} from 'react-redux';
import './style.sass';

import store from '../../store';

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<main className="content"></main>
			</Provider>
		);
	}
}

export default App;