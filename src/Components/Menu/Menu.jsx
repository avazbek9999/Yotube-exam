import './Menu.scss';

import Nav from '../Nav/Nav';
import Subscriptions from '../Subscriptions/Subscriptions';

function Menu() {
	return (
		<>
			<div className='menu__inner'>
				<Nav />
				<Subscriptions />
			</div>
		</>
	);
}

export default Menu;
