function Authenticate(component) {
	const accessToken = localStorage.getItem('access');
	const isLoggedIn = accessToken ? true : false;
	if (isLoggedIn) {
		return component;
	} else {
		return () => {
			window.location.replace('/login');
			return <div>unauthorised</div>;
		};
	}
}
export default Authenticate;
