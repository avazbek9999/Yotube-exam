import React from 'react';
import './VideoList.scss';

function VideoList() {
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/photos')
			.then((response) => response.json())
			.then((data) => setData(data.slice(0, 6)));
	}, []);

	return (
		<>
			<section className='videolist'>
				<div className='next_vide'>
					<h4 className='next__headding'>Next</h4>
					<div className='span__controller'>
						<span className='autoply'>Autoplay</span>
						<span className='corcle'></span>
					</div>
				</div>
				<ul className='next__list'>
					{data.length > 0 &&
						data.map((row) => (
							<li className='next__item' key={row.id}>
								<img
									className='next__item__img'
									src={row.thumbnailUrl}
									alt='next videos'
									width={367}
									height={213}
								/>
								<div className='next__item__innern'>
									<h4 className='next__item__headding'>
										{row.title
											.split(' ')
											.slice(0, 3)
											.join(' ')}
									</h4>
									<div className='controller__span'>
										<span className='viwe'>123k views</span>
										<span className='name'>
											Dollie Blair
										</span>
									</div>
								</div>
							</li>
						))}
				</ul>
			</section>
		</>
	);
}

export default VideoList;
