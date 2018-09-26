import React from 'react';

import Header from './components/Header/Header.js';
import HeaderFrontpage from './components/Header/HeaderFrontpage.js';
import Testimonials from './components/Slider/Testimonials.js';


export default class App extends React.Component {
	render() {

		return(
			<div>
				<Header />
				<HeaderFrontpage />
				<section className='sekcija prednost'>
					<div className='container'>
						<h3>Prednosti</h3>
						<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
						<ul>
							<li>
								<h5>Hitrost</h5>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus lorem condimentum.</p>
								<a href='#'>Preberi več
									<img src='assets/img/icon/arrow-right.svg' />
								</a>
								<img className='icon' src='assets/img/icon/speed.svg' />
							</li>
							<li>
								<h5>Natančnost</h5>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus lorem condimentum.</p>
								<a href='#'>Preberi več
									<img src='assets/img/icon/arrow-right.svg' />
								</a>
								<img className='icon' src='assets/img/icon/target3.svg' />
							</li>
							<li>
								<h5>Prilagodljivost</h5>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus lorem condimentum.</p>
								<a href='#'>Preberi več
									<img src='assets/img/icon/arrow-right.svg' />
								</a>
								<img className='icon' src='assets/img/icon/paintbrush.svg' />
							</li>
						</ul>
					</div>
				</section>
				<section className='sekcija Testimonials-slider'>
					<div className='container'>
						<h3>Mnenja strank</h3>
						<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
						<Testimonials />
					</div>
				</section>
			</div>
		);
	}
}