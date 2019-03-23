import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.sass';

import App from './components/App/App.jsx';

ReactDOM.render(
	<App></App>,
	document.querySelector('.page-wrapper')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
serviceWorker.unregister();