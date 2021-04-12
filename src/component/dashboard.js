import { BiHomeAlt } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';
import { VscGraph } from 'react-icons/vsc';
import { GoCalendar } from 'react-icons/go';
import { MdSettings } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
const navItems = [
	{ name: 'Dashboard', icon: <BiHomeAlt />, link: '/' },
	{ name: 'Recruitment', icon: <BsPeople />, link: '/recruitment' },
	{ name: 'Onboarding', icon: <CgFileDocument />, link: '/onboarding' },
	{ name: 'report', icon: <VscGraph />, link: '/report' },
	{ name: 'Calendar', icon: <GoCalendar />, link: '/calendar' },
	{ name: 'Setting', icon: <MdSettings />, link: '/setting' },
];

const DashBoard = ({ children }) => {
	const location = useLocation();
	return (
		<div className="dashboard-layout">
			<nav className="side-navbar">
				<div className="logo-container">
					<h3>Matrix HR</h3>
				</div>
				<div className="navbar-container">
					{navItems.map((navItem, index) => (
						<Link to={navItem.link}>
							<div
								key={index}
								className={`nav-item ${navItem.link === location.pathname ? 'selected' : ''}`}
							>
								{navItem.icon}
								<label className="item-name">{navItem.name}</label>
							</div>
						</Link>
					))}
				</div>
			</nav>
			<div className="main-container">{children}</div>
		</div>
	);
};
export default DashBoard;
