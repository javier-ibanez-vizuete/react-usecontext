import "./CustomInput.css";

export const CustomInput = ({ children, inputName, labelName }) => {
	return (
		<div className="custom-input">
			<label htmlFor={inputName}>{labelName}</label>
			{children}
		</div>
	);
};
