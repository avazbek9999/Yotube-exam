import React from 'react';
import './Footer.scss'
import { NavLink } from 'react-router-dom';

import HomeIcon from '../Lib/Svg/HomeIcon'
import Trending from '../Lib/Svg/Trending';
import Subscriptions from '../Lib/Svg/Subscriptions';
import Library from '../Lib/Svg/Library';

function Footer() {

	return (
		<>
			<footer className='footer'>
				<div className='container'>
					<ul className='footer__list'>
						<li className='footer__item'>
							<NavLink className='footer__link' to='/'>
								<HomeIcon />
								Home
							</NavLink>
						</li>

						<li className='footer__item'>
							<NavLink
								className='footer__link'
								to='/trending'>
								<Trending />
								Trending
							</NavLink>
						</li>

						<li className='footer__item'>
							<NavLink
								className='footer__link'
								to='/subscriptions'>
								<Subscriptions />
								Subscriptions
							</NavLink>
						</li>

						<li className='footer__item'>
							<NavLink
								className='footer__link'
								to='/library'>
								<Library />
								Library
							</NavLink>
						</li>
					</ul>
				</div>
			</footer>
		</>
	);
}

export default Footer;