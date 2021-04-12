import { useEffect } from 'react';
import Header from '../../header/header';
import Authenticate from '../../hoc/autentication';

const Home = (props) => {
	// console.log(props.isLoggedIn);
	// useEffect(() => {
	// 	if (!props.isLoggedIn) {
	// 		props.history.push('/login');
	// 	}
	// }, [props.isLoggedIn]);
	return (
		<div className="home">
			<Header pageHeader="DashBoard" />
		</div>
	);
};
export default Authenticate(Home);
