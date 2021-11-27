import React from 'react';
import './Recommended.scss';
import { Link } from 'react-router-dom';

import PrevIcon from '../Lib/Svg/PrevIcon';
import NextIcon from '../Lib/Svg/NextIcon';

function Recommended() {
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		fetch(process.env.REACT_APP_PLACEHOLDER_API + '/photos')
			.then((res) => res.json())
			.then((data) => setData(data.splice(12, 24)));
    }, []);
    
	return (
		<>
			<section className='recommended'>
				<div className='container'>
					<div className='recommended__inner'>
						<h2 className='recommended__headding'>Recommended</h2>
						<div className='controller'>
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
											width='540'
											height='300'
										/>
										<h5 className='dollie__item__headding'>
											{row.title}
										</h5>
										<div className='dollie__inner'>
											<span className='dollie__inner__paragrf'>
												80k views · 3 days ago
											</span>
											<span className='dollie__inner__headding'>
												Dollie Blair
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

export default Recommended;
