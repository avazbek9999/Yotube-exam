import React from 'react';
import './VideoInfo.scss';
import { NavLink } from 'react-router-dom';

import Food from '../../Assets/Images/Food.png';
import SubscripBtn from '../SubscripBtn/SubscripBtn';

function VideoInfo() {
	return (
		<>
			<div className='video__description'>
				<div className='video__description__inner'>
					<NavLink to='/channel'>
						<img
							className='video__description__avatar'
							src={Food}
							alt='Food'
							width={80}
							height={80}
						/>
					</NavLink>
					<div className='about-video'>
						<div className='video__channel-name'>
							<h3 className='video__channel__headding'>
								Food & Drink
							</h3>
							<p className='published-date'>
								Published on 14 Jun 2019
							</p>
						</div>

						<div className='about-video__text'>
							<p className='about-video-paragrf'>
								A successful marketing plan relies heavily on
								the pulling-power of advertising copy. Writing
								result-oriented ad copy is difficult, as it must
								appeal to, entice, and convince consumers to
								take action. There is no magic formula to write
								perfect ad copy; it is based on a number of
								factors, including ad placement, demographic,
								even the consumer’s mood when they see your ad.{' '}
							</p>

							<span className='about__show'>Show more</span>
						</div>
					</div>
				</div>

				<div className='vidio__subscribbtn'>
					<SubscripBtn />
				</div>
			</div>
		</>
	);
}

export default VideoInfo;
