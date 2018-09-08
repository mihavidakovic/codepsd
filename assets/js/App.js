import React from 'react';

import Header from './components/Header/Header.js';
import HeaderFrontpage from './components/Header/HeaderFrontpage.js';


export default class App extends React.Component {
	render() {

		return(
			<div>
				<Header />
				<HeaderFrontpage />
			</div>
		);
	}
}