import './Nav.scss';
import { NavLink } from 'react-router-dom';

import HomeIcon from '../Lib/Svg/HomeIcon';
import Trending from '../Lib/Svg/Trending';
import Subscriptions from '../Lib/Svg/Subscriptions';
import Library from '../Lib/Svg/Library';
import History from '../Lib/Svg/History';
import Watch from '../Lib/Svg/Watch';
import Favourities from '../Lib/Svg/Favourities';
import Liked from '../Lib/Svg/Liked';
import Music from '../Lib/Svg/Music';
import Games from '../Lib/Svg/Games';
import ChermonDawn from '../Lib/Svg/ChermonDawn';

function Nav() {
	return (
		<>
			<nav className='nav'>
				<ul className='nav__list'>
					<li className='nav__item'>
						<NavLink className='nav__link' to='/'>
							<HomeIcon />
							Home
						</NavLink>
					</li>
					<li className='nav__item'>
						<NavLink className='nav__link' to='/trending'>
							<Trending />
							Trending
						</NavLink>
					</li>
					<li className='nav__item'>
						<NavLink className='nav__link' to='/subscriptions'>
							<Subscriptions />
							Subscriptions
						</NavLink>
					</li>
					<li className='nav__item'>
						<NavLink className='nav__link' to='/library'>
							<Library />
							Library
						</NavLink>
					</li>
					<li className='nav__item'>
						<NavLink className='nav__link' to='/history'>
							<History />
							History
						</NavLink>
					</li>
					<li className='nav__item'>
						<NavLink className='nav__link' to='/watch'>
							<Watch />
							Watch
						</NavLink>
					</li>
					<li className='nav__item'>
						<NavLink className='nav__link' to='/favourities'>
							<Favourities />
							Favourities
						</NavLink>
					</li>
					<li className='nav__item'>
						<NavLink className='nav__link' to='/liked'>
							<Liked />
							Liked videos
						</NavLink>
					</li>
					<li className='nav__item'>
						<NavLink className='nav__link' to='/music'>
							<Music />
							Music
						</NavLink>
					</li>
                    <li className='nav__item'>
						<NavLink className='nav__link' to='/games'>
							<Games />
							Games
						</NavLink>
                    </li>
                    <li className='nav__item'>
						<NavLink className='nav__link' to='/show'>
							<ChermonDawn />
							Show more
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Nav;
