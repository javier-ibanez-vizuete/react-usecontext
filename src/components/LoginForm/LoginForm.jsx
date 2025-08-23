import { useContext, useState } from "react";
import "./LoginForm.css";
import { CustomInput } from "../CustomInput/CustomInput";
import { UserContext } from "../../context/UserContext";
import { LanguageContext } from "../../context/LanguageContext";

const INITIAL_LOGIN_STATE = {
	userName: "",
	userSurname: "",
	userEmail: "",
	role: "",
};

export const LoginForm = () => {
	const { userLogin } = useContext(UserContext);
	const { lang, TEXTS } = useContext(LanguageContext);

	const [loginData, setLoginData] = useState(INITIAL_LOGIN_STATE);
	const [error, setError] = useState("");
	const { userName, userSurname, userEmail, role } = loginData;

	const onInputChange = (event) => {
		const { name, value } = event.target;

		setError("");
		setLoginData((prevValue) => ({ ...prevValue, [name]: value }));
	};

	const onFormSubmit = (event) => {
		event.preventDefault();

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
			<h2>{TEXTS[lang].loginFormTitle}</h2>
			<CustomInput inputName={"userName"} labelName={TEXTS[lang].labelName}>
				<input
					type="text"
					name="userName"
					id="userName"
					value={userName}
					onChange={onInputChange}
					placeholder={TEXTS[lang].inputNamePlaceholder}
					minLength={2}
					maxLength={20}
					required
				/>
			</CustomInput>

			<CustomInput inputName={"userSurname"} labelName={TEXTS[lang].labelSurname}>
				<input
					type="text"
					name="userSurname"
					id="userSurname"
					value={userSurname}
					onChange={onInputChange}
					placeholder={TEXTS[lang].inputSurnamePlaceholder}
					minLength={2}
					maxLength={30}
					required
				/>
			</CustomInput>

			<CustomInput inputName={"userEmail"} labelName={TEXTS[lang].labelEmail}>
				<input
					type="email"
					name="userEmail"
					id="userEmail"
					value={userEmail}
					onChange={onInputChange}
					placeholder={TEXTS[lang].inputEmailPlaceholder}
					minLength={4}
					maxLength={30}
					required
				/>
			</CustomInput>
			<CustomInput inputName={"role"} labelName={TEXTS[lang].labelRole}>
				<select name="role" id="role" value={role} onChange={onInputChange}>
					<option value="guest">{TEXTS[lang].optionGuest}</option>
					<option value="user">{TEXTS[lang].optionUser}</option>
					<option value="admin">{TEXTS[lang].optionAdmin}</option>
				</select>
			</CustomInput>
			{error && <p className="error-text">{error}</p>}
			<div className="login-btns-container">
				<button type="submit" className="btn-login">
					{TEXTS[lang].loginButton}
				</button>
				<button type="reset" className="btn-reset-login">
					{TEXTS[lang].resetButton}
				</button>
			</div>
		</form>
	);
};
