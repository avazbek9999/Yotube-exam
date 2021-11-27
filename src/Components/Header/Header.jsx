import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

import MenuIcon from '../Lib/Svg/MenuIcon';
import Logo from '../Lib/Svg/Logo.';
import VideoIcon from '../Lib/Svg/VideoIcon';
import CombinetIcon from '../Lib/Svg/CombinetIcon';
import BellIcon from '../Lib/Svg/BellIcon';
import UserPic from '../../Assets/Images/Userpic.png';

import Search from '../Search/Search';

function Header() {
	return (
		<>
			<div className='header'>
				<MenuIcon />
				<NavLink to='/'>
					<Logo />
				</NavLink>
				<Search />
				<ul className='header__list'>
					<li className='header__item'>
						<NavLink to='/video'>
							<VideoIcon />
						</NavLink>
					</li>
					<li className='header__item'>
						<NavLink to='/setting'>
							<CombinetIcon />
						</NavLink>
					</li>
					<li className='header__item'>
						<NavLink to='/'>
							<BellIcon />
						</NavLink>
					</li>
				</ul>
				<img
					className='header__avatar'
					src={UserPic}
					alt='user avatar'
					width='40'
					height='40'
				/>
			</div>
		</>
	);
}

export default Header;
