import Input from '../input/input';
import { FiSearch } from 'react-icons/fi';
// import { IoMdSend } from 'react-icons/io';
import { BiSend } from 'react-icons/bi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import Avatar from '../component/avatar/avatar';

const Header = ({ pageHeader }) => {
	return (
		<header className="header">
			<div className="page-header">
				<h1>{pageHeader}</h1>
			</div>
			<div className="action-container">
				<Input icon={<FiSearch />} />
				<BiSend className="action-icon" />
				<IoIosNotificationsOutline className="action-icon" />
			</div>
			<div className="profile-container">
				<label>Raja Kumar</label>
				<Avatar />
			</div>
		</header>
	);
};
export default Header;
