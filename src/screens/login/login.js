// import { useState } from 'react';

const Login = (props) => {
	const loginHandler = () => {
		const jwtToken =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
		localStorage.setItem('access', jwtToken);
		// props.setIsLoggedIn(true);
		// props.history.push('/');
	};
	return (
		<div>
			<button onClick={loginHandler}>Login</button>
		</div>
	);
};
export default Login;
