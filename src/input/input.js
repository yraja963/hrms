var defaultClasses = {
	inputClassName: '',
	labelClassName: '',
	iconClassName: '',
	inputComponentClass: '',
	inputIconContainer: '',
};

const Input = ({ type = 'text', value, name, label, id, icon, classes = { ...defaultClasses }, onChange }) => {
	const { inputClassName, labelClassName, iconClassName, inputComponentClass, inputIconContainer } = classes;
	return (
		<div className={`input-component${inputComponentClass}`}>
			{label && <label className={`label ${labelClassName}`}>{label}</label>}
			<div className={`input-icon-container ${inputIconContainer}`}>
				<input
					id={id}
					className={`input ${inputClassName}`}
					type={type}
					value={value}
					name={name}
					onChange={onChange}
				/>
				{icon}
			</div>
		</div>
	);
};
export default Input;
