import React from 'react';
import './style.sass';

import Header from '../Header';
import Footer from '../Footer';

class AppShell extends React.Component {
	render() {
		return (
			<div className="page-wrapper">
				<Header/>
				<main className="content">
					{this.props.children}
				</main>
				<Footer/>
			</div>
		);
	}
}

export default AppShell;