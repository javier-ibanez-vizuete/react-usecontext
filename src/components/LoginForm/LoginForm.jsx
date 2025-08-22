import { useContext, useState } from "react";
import "./LoginForm.css";
import { CustomInput } from "../CustomInput/CustomInput";
import { UserContext } from "../../context/UserContext";

const INITIAL_LOGIN_STATE = {
	userName: "",
	userSurname: "",
	userEmail: "",
};

export const LoginForm = () => {
	const { userLogin } = useContext(UserContext);

	const [loginData, setLoginData] = useState(INITIAL_LOGIN_STATE);
	const [error, setError] = useState("");
	const { userName, userSurname, userEmail } = loginData;

	const onInputChange = (event) => {
		const { name, value } = event.target;

		setError("");
		setLoginData((prevValue) => ({ ...prevValue, [name]: value }));
	};

	const onFormSubmit = (event) => {
		event.preventDefault();
		console.log("Enviando Formulario");

		const { userName, userSurname, userEmail } = loginData;
		if (!userName) return setError("Name field is required");
		if (!userSurname) return setError("Surname field is required");
		if (!userEmail) return setError("Email field is required");

		userLogin(loginData);
	};

	const onFormReset = (event) => {
		event.preventDefault();
		setError("");
		setLoginData(INITIAL_LOGIN_STATE);
	};

	return (
		<form className="login-form" onSubmit={onFormSubmit} onReset={onFormReset}>
			<h2>Login Form</h2>
			<CustomInput inputName={"userName"} labelName={"Name"}>
				<input
					type="text"
					name="userName"
					id="userName"
					value={userName}
					onChange={onInputChange}
					placeholder="Inser a Name"
					minLength={2}
					maxLength={20}
					required
				/>
			</CustomInput>

			<CustomInput inputName={"userSurname"} labelName={"Surname"}>
				<input
					type="text"
					name="userSurname"
					id="userSurname"
					value={userSurname}
					onChange={onInputChange}
					placeholder="Insert a surname"
					minLength={2}
					maxLength={30}
					required
				/>
			</CustomInput>

			<CustomInput inputName={"userEmail"} labelName={"Email"}>
				<input
					type="email"
					name="userEmail"
					id="userEmail"
					value={userEmail}
					onChange={onInputChange}
					placeholder="Insert an Email"
					minLength={4}
					maxLength={30}
					required
				/>
			</CustomInput>
			{error && <p className="error-text">{error}</p>}
			<div className="login-btns-container">
				<button type="submit" className="btn-login">
					Log in
				</button>
				<button type="reset" className="btn-reset-login">
					Reset Form
				</button>
			</div>
		</form>
	);
};
