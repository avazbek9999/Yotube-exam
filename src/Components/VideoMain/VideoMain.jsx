import React from 'react';
import './VideoMain.scss';

import VideoIntro from '../VideoIntro/VideoIntro';
import VideoList from '../VideoList/VideoList';

function VideoMain() {
	return (
		<>
			<div className='video__inner'>
				<VideoIntro />
				<VideoList />
			</div>
		</>
	);
}

export default VideoMain;
