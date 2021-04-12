import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import DashBoard from './component/dashboard';
import Home from './screens/home/home';
import Login from './screens/login/login';
import Recruitment from './screens/recruitment/recruitment';

const Controller = () => {
	// const [isLoggedIn, setIsLoggedIn] = useState(false);
	return (
		<Router>
			{/* {console.log(isLoggedIn)} */}
			<Switch>
				<Route exact path="/login" render={(props) => <Login {...props} />} />
				<DashBoard>
					<Route exact path="/" render={(props) => <Home {...props} />} />
					<Route exact path="/recruitment" render={(props) => <Recruitment {...props} />} />
					<Route exact path="/onboarding" />
					<Route exact path="/report" />
					<Route exact path="/calender" />
					<Route exact path="/setting" />
				</DashBoard>
			</Switch>
		</Router>
	);
};

export default Controller;
