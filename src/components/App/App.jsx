import React from 'react';
import './App.sass';

class App extends React.Component {
	render() {
		return (
			<div className="page-wrapper">
				<main className="content">
					{this.props.children}
				</main>
			</div>
		);
	}
}

export default App;