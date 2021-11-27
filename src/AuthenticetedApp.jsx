import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Channel from './Pages/Channel/Channel';
import Video from './Pages/Video/Video';

function AuthenticetedApp() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/channel/*' element={<Channel />} />
				<Route path='/video' element={<Video />} />
			</Routes>
		</>
	);
}

export default AuthenticetedApp;
