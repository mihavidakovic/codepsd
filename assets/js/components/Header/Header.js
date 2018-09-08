import React from 'react';

export default class Header extends React.Component {
	render() {

		return(
			<div className='navbar'>
				<div className='container'>
					<h1>
						<a href='#'>
							CodePSD
						</a>
					</h1>
					<ul className='menu'>
						<li className='active'>
							<a href='#'>Domov</a>
						</li>
						<li>
							<a href='#'>Kako deluje</a>
						</li>
						<li>
							<a href='#'>Portfolio</a>
						</li>
						<li>
							<a href='#'>Cenik</a>
						</li>
						<li>
							<a href='#'>Kontakt</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}