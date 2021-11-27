import React from 'react';
import './ChanHead.scss';

import Margaret from '../../Assets/Images/Margaret.png';

import BellIcon from '../Lib/Svg/BellIcon';
import SubscripBtn from '../SubscripBtn/SubscripBtn';

function ChanHead() {
	return (
		<>
			<section className='chanhead'>
				<div className='avatar__inner'>
					<img
						className='chanhead__avatar'
						src={Margaret}
						alt='avatar'
						width='80'
						height='80'
					/>
					<div className=''>
						<h2 className='chanhead__headding'>Margaret Phelps</h2>
						<span className='chanhead__span'>245K subscribed</span>
					</div>
				</div>
				<div className='avatar__info'>
					<BellIcon />
					<SubscripBtn />
				</div>
			</section>
		</>
	);
}

export default ChanHead;
