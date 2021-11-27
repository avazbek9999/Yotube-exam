import React from 'react';
import './Login.scss';
import { makeStyles } from '@mui/styles';
import { TextField, Button } from '@mui/material';

import useToken from '../../Hooks/useToken';
// import useTheme from '../../Hooks/useTheme';

const useStyles = makeStyles({
	mainButton: {
		padding: '18px !important',
		borderRadius: '76px !important',
		marginBottom: '20px !important',
	},
	loginput: {
        marginBottom: '20px !important',
	},
});

function Login() {
	const classes = useStyles();
	const [, setToken] = useToken();
	// const [theme] = useTheme();

	const handleSubmit = (evt) => {
		evt.preventDefault();
		const { username, password } = evt.target.elements;
		if (username.value.length > 2 && password.value.length >= 4) {
			setToken({
				username: username.value,
				password: password.value,
			});
		}
	};
	return (
		<>
			<div className='login'>
				{/* <Logo /> */}
				<h1 className='login__headding '>Log in to Yotube</h1>
				<form className='login__form' onSubmit={handleSubmit}>
					<TextField
						className={classes.loginput}
						fullWidth
						type='text'
						name='username'
						label='Username'
						variant='outlined'
					/>
                    <TextField
						className={classes.loginput}
						fullWidth
						type='password'
						name='password'
						label='Password'
						variant='outlined'
					/>
					<Button
						className={classes.mainButton}
						color='info'
						type='submit'
						variant='contained'
						fullWidth>
						Log In
					</Button>
				</form>
				<ul className='login__list'>
					<li className='login__item'>Forgot password?</li>
					<li className='login__item'>Sign up to Yotube</li>
				</ul>
			</div>
		</>
	);
}

export default Login;
