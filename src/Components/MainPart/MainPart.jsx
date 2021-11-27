import './MainPart.scss';

import Dollie from '../Dollie/Dollie';
import Recommended from '../Recommended/Recommended';
import FoodDrink from '../FoodDrink/FoodDrink';

function MainPart() {
	return (
		<>
			<div className='main-part'>
				<Dollie />
				<Recommended />
				<FoodDrink />
			</div>
		</>
	);
}

export default MainPart;
