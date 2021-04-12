const Avatar = ({ srcUrl = 'https://reqres.in/img/faces/7-image.jpg' }) => {
	return (
		<div className="avatar">
			<img className="image" src={srcUrl} alt={'userImage'} />
		</div>
	);
};
export default Avatar;
