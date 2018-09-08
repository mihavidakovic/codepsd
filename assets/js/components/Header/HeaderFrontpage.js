import React from 'react';
import Button from '../Button/Button.js';

export default class HeaderFrontpage extends React.Component {
	render() {

		return(
			<div className='header-frontpage'>
				<img src='assets/img/header-frontpage-bg.svg' />
				<div className='container'>
					<div class="left">
						<h2>Razrez vašega dizajna v HTML in CSS</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum, lorem sit amet placerat varius.</p>
						<Button text="Naroči" type="primary" />
						<Button text="Kako deluje" type="primary-white" />
					</div>
					<div className='right'>
						<div className='video'>
						</div>
					</div>
				</div>
			</div>
		);
	}
}