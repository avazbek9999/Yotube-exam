import React from 'react';
import './ChanMainPart.scss';

import ChannelBg from '../../Assets/Images/Channelbg.png';

import ChanHead from '../ChanHead/ChanHead';
import ChanIntro from '../ChanIntro/ChanIntro';
import Margaret from '../Margaret/Margaret';

function ChanMainPart() {
	return (
		<>
			<div className='inner'>
				<img
					className='channel-bg'
					src={ChannelBg}
					alt='beckgraund '
					width='1595'
					height='true'
				/>
				<ChanHead />
				<ChanIntro />
				<Margaret />
			</div>
		</>
	);
}

export default ChanMainPart;
