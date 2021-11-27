import React from 'react';
import './ChanMain.scss';

import Menu from '../Menu/Menu';
import ChanMainPart from '../ChanMainPart/ChanMainPart';

function ChanMain() {
	return (
		<>
			<div className='channel__inner'>
				<Menu />
				<ChanMainPart />
			</div>
		</>
	);
}

export default ChanMain;
