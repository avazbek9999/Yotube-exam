import React from 'react';
import './VideoIntro.scss';

import VideoBg from '../../Assets/Images/Videobg.png';

import LikeIcon from '../Lib/Svg/LikeIcon';
import DislikeIcon from '../Lib/Svg/DislikeIcon';
import ShareIcon from '../Lib/Svg/ShareIcon';
import MoreIcon from '../Lib/Svg/MoreIcon';

import VideoInfo from '../VideoInfo/VideoInfo';

function VideoIntro() {
	// const [data, setData] = React.useState();

	// React.useEffect(() => {
	// 	fetch(process.env.REACT_APP_PLACEHOLDER_API + '/photos')
	// 		.then((res) => res.json())
	// 		.then((data) => setData(data));
	// }, []);

	return (
		<>
			<div className='video__intro'>
				<div className='playlist'>
					<img
						className='video__intro__img'
						src={VideoBg}
						alt='sadasddsda'
						width='1360'
						height='700'
					/>
					<h2 className='video__intro__headding'>
						Dude You Re Getting A Telescope
					</h2>
					<div className='video__intro__info'>
						<span className='video__intro__span'>123k views</span>
						<ul className='video__intro__list'>
							<li className='video__intro__item'>
								<button className='video__intro__item__link'>
									<LikeIcon />
									123k
								</button>
							</li>
							<li className='video__intro__item'>
								<button className='video__intro__item__link'>
									<DislikeIcon />
									435k
								</button>
							</li>
							<li className='video__intro__item'>
								<button className='video__intro__item__link'>
									<ShareIcon />
									share
								</button>
							</li>
							<li className='video__intro__item'>
								<MoreIcon />
							</li>
						</ul>
					</div>
				</div>
				<VideoInfo />
			</div>
		</>
	);
}
export default VideoIntro;
