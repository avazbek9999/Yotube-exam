import React from 'react';
import './ChanIntro.scss';
import { Routes, Route, NavLink } from 'react-router-dom';

import SearchIcon from '../Lib/Svg/SearchIcon';
import Arrow from '../Lib/Svg/Arrow';
import Choosing from '../../Assets/Images/Choosing.png';
import Benson from '../../Assets/Images/Benson.png';
import Cobb from '../../Assets/Images/Cobb.png';
import Philip from '../../Assets/Images/Philip.png';

function ChanIntro() {
	return (
		<>
			<section className='intro'>
				<div className='intro__inner'>
					<ul className='intro__list intro__mobile'>
						<li className='intro__item'>
							<NavLink className='intro__link' to='home'>
								Home
							</NavLink>
						</li>
						<li className='intro__item'>
							<NavLink className='intro__link' to='videos'>
								Videos
							</NavLink>
						</li>
						<li className='intro__item'>
							<NavLink className='intro__link' to='playlists'>
								Playlists
							</NavLink>
						</li>
						<li className='intro__item'>
							<Arrow />
						</li>
					</ul>

					<ul className='intro__list'>
						<li className='intro__item'>
							<NavLink className='intro__link' to='home'>
								Home
							</NavLink>
						</li>
						<li className='intro__item'>
							<NavLink className='intro__link' to='videos'>
								Videos
							</NavLink>
						</li>
						<li className='intro__item'>
							<NavLink className='intro__link' to='playlists'>
								Playlists
							</NavLink>
						</li>
						<li className='intro__item'>
							<NavLink className='intro__link' to='channels'>
								Channels
							</NavLink>
						</li>
						<li className='intro__item'>
							<NavLink className='intro__link' to='discussion'>
								Discussion
							</NavLink>
						</li>
						<li className='intro__item'>
							<NavLink className='intro__link' to='about'>
								About
							</NavLink>
						</li>
						<li className='intro__item'>
							<SearchIcon />
						</li>
					</ul>
					<Routes>
						<Route path='home' element={<strong>home</strong>} />
						<Route
							path='videos'
							element={<strong>videos</strong>}
						/>
						<Route
							path='playlists'
							element={<strong>playlists</strong>}
						/>
						<Route
							path='channels'
							element={<strong>channels</strong>}
						/>
						<Route
							path='discussion'
							element={<strong>discussion</strong>}
						/>
						<Route path='about' element={<strong>about</strong>} />
					</Routes>
					<div className='choosing'>
						<NavLink className='choosing__link' to='/video'>
							<img
								className='choosing__img'
								src={Choosing}
								alt='It is a most popular and trend video of this channel'
								width={540}
								height={250}
							/>
						</NavLink>
						<div className='choosing__description'>
							<h4 className='description__headding'>
								Choosing The Best Audio Player Software For Your
								Computer
							</h4>
							<p className='description__paragrf'>
								Your cheap internet-based banner advertising
								will become one of the sought for ads there are.
								Today, the world of Internet advertising is
								rapidly evolving beyond banner ads and intrusive
								pop-ups. Bayles A common medium for advertising
								on the Internet is the use of banner ads.{' '}
							</p>
							<span className='description__span'>
								11k views · 6 months ago
							</span>
						</div>
					</div>
				</div>
				<div className='channel__recommendeds'>
					<h4 className='channel__recommendeds__heading'>
						Recommended channel
					</h4>

					<ul className='channel__recommendeds__list'>
						<li className='channel__recommendeds__item'>
							<NavLink
								className='channel__recommendeds__link'
								to='/channel'>
								<img src={Benson} alt='avatar' />
								<h5 className='channel__recommendeds__paragrf'>
									Flora Benson
								</h5>
							</NavLink>
						</li>
						<li className='channel__recommendeds__item'>
							<NavLink
								className='channel__recommendeds__link'
								to='/channel'>
								<img src={Cobb} alt='avatar' />
								<h5 className='channel__recommendeds__paragrf'>
									Violet Cobb
								</h5>
							</NavLink>
						</li>
						<li className='channel__recommendeds__item'>
							<NavLink
								className='channel__recommendeds__link'
								to='/channel'>
								<img src={Philip} alt='avatar' />
								<h5 className='channel__recommendeds__paragrf'>
									Phillip Mullins
								</h5>
							</NavLink>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}

export default ChanIntro;
