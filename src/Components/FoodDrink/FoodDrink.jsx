import React from 'react';
import './FoodDrink.scss';
import { Link } from 'react-router-dom';

import Food from '../../Assets/Images/Food.png';

import PrevIcon from '../Lib/Svg/PrevIcon';
import NextIcon from '../Lib/Svg/NextIcon';

import SubscripBtn from '../SubscripBtn/SubscripBtn';

function FoodDrink() {
	
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		fetch(process.env.REACT_APP_PLACEHOLDER_API + '/photos')
			.then((res) => res.json())
			.then((data) => setData(data.splice(24, 36)));
	}, []);

	return (
		<>
			<section className='dollie'>
				<div className='container'>
					<div className='header__inner'>
						<Link className='dollie__link' to='/channel'>
							<img
								src={Food}
								alt='avatar'
								width='50'
								height='50'
							/>
							<strong className='dollie__headding'>
								Food & Drink
							</strong>
							<span className='dollie__span'>
								Recommended channel for you
							</span>
						</Link>

						<SubscripBtn />

						<div className='controller btn'>
							<button className='prev' type='button'>
								<PrevIcon />
							</button>
							<button className='next' type='button'>
								<NextIcon />
							</button>
						</div>
					</div>
					<ul className='dollie__list'>
						{data.length > 0 &&
							data.map((row) => (
								<li className='dollie__item' key={row.id}>
									<Link
										className='dollie__item__link'
										to='/video'>
										<img
											className='dollie__item__pic'
											src={row.thumbnailUrl}
											alt='dollie avatar'
											width='250'
											height='150'
										/>
										<h5 className='dollie__item__headding'>
											{row.title
												.split(' ')
												.slice(0, 3)
												.join(' ')}
										</h5>
										<div className='dollie__inner'>
											<span className='dollie__inner__paragrf'>
												80k views · 3 days ago
											</span>
											<span className='dollie__inner__headding'>
												Food & Drink
											</span>
										</div>
									</Link>
								</li>
							))}
					</ul>
				</div>
			</section>
		</>
	);
}

export default FoodDrink;
