import React from 'react';
import './App.sass';

class App extends React.Component {
	render() {
		return (
			<>
				<main className="content">
					{this.props.children}
				</main>
				<div></div>
			</>
		);
	}
}

export default App;