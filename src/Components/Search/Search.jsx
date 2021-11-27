import React from 'react';
import './Search.scss';

import SearchIcon from '../Lib/Svg/SearchIcon';

function Search() {
	return (
		<>
			<form className='form'>
				<input
					className='form__input'
					type='text'
					placeholder='Search'
					name='userSearch'
				/>
				{/* <img
					className='form__pic'
					src={SearchIcon}
					alt='search icon'
					width='18'
					height='18'
				/> */}
				<div className="form__pic">
					<SearchIcon />
				</div>
			</form>
		</>
	);
}

export default Search;
