import React from 'react';
import './HomeMain.scss';

import Menu from '../Menu/Menu';
import MainPart from '../MainPart/MainPart';

function HomeMain() {
	return (
		<>
			<div className='home__inner'>
				<Menu />
				<MainPart />
			</div>
		</>
	);
}

export default HomeMain;
