import './Subscriptions.scss';
import { NavLink } from 'react-router-dom';

import Gussie from '../../Assets/Images/Gussie.png';
import Nora from '../../Assets/Images/Nora.png';
import Belle from '../../Assets/Images/Belle.png';
import Cortez from '../../Assets/Images/Cortez.png';
import Emma from '../../Assets/Images/Emma.png';
import Berry from '../../Assets/Images/Berry.png';

import Setting from '../Lib/Svg/Setting';

function Subscriptions() {
	return (
		<>
			<div className='subscriptions'>
				<h2 className='subscriptions__headding'>Subscriptions</h2>
				<ul className='subscriptions__list'>
					<li className='subscriptions__item'>
						<NavLink className='subscriptions__link' to='/channel'>
							<img src={Gussie} alt='user avatar' />
							<p className='subscriptions__title'>
								Gussie Singleton
							</p>
						</NavLink>
					</li>
					<li className='subscriptions__item'>
						<NavLink className='subscriptions__link' to='/channel'>
							<img src={Nora} alt='user avatar' />
							<p className='subscriptions__title'>Nora Francis</p>
						</NavLink>
					</li>
					<li className='subscriptions__item'>
						<NavLink className='subscriptions__link' to='/channel'>
							<img src={Belle} alt='user avatar' />
							<p className='subscriptions__title'>Belle Briggs</p>
						</NavLink>
					</li>
					<li className='subscriptions__item'>
						<NavLink className='subscriptions__link' to='/channel'>
							<img src={Cortez} alt='user avatar' />
							<p className='subscriptions__title'>
								Eunice Cortez
							</p>
						</NavLink>
					</li>
					<li className='subscriptions__item'>
						<NavLink className='subscriptions__link' to='/channel'>
							<img src={Emma} alt='user avatar' />
							<p className='subscriptions__title'>Emma Hanson</p>
						</NavLink>
					</li>
					<li className='subscriptions__item'>
						<NavLink className='subscriptions__link' to='/channel'>
							<img src={Berry} alt='user avatar' />
							<p className='subscriptions__title'>Leah Berry</p>
						</NavLink>
					</li>
				</ul>
				<NavLink className='setting__link' to='/'>
                    <Setting />
                    <span className='setting__headding'>Setting</span>
				</NavLink>
			</div>
		</>
	);
}

export default Subscriptions;
