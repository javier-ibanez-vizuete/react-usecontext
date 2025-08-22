import { createContext, useState } from "react";

export const LanguageContext = createContext(null);

const TEXTS = {
	en: {
		welcome: "Welcome",
		loginFormTitle: "Login Form",
		labelName: "Name",
		labelSurname: "Surname",
		labelEmail: "Email",
		inputNamePlaceholder: "Insert a Name",
		inputSurnamePlaceholder: "Insert a Surname",
		inputEmailPlaceholder: "Insert an Email",
		loginButton: "Log in",
		resetButton: "Reset Form",
		logoutButton: "Log out",
	},
	es: {
		welcome: "Bienvenido",
		loginFormTitle: "Formulario Inicio sesión",
		labelName: "Nombre",
		labelSurname: "Apellidos",
		labelEmail: "Correo electrónico",
		inputNamePlaceholder: "Introduzca un nombre",
		inputSurnamePlaceholder: "Introduzca un apellido",
		inputEmailPlaceholder: "Introduzca un correo electrónico",
		loginButton: "Iniciar sesión",
		resetButton: "Borrar Formulario",
		logoutButton: "Cerrar Sesión",
	},
};

export const LanguageProvider = ({ children }) => {
	const [lang, setLang] = useState("en");

	const onToggleLang = () => {
		setLang((prevLang) => (prevLang === "en" ? "es" : "en"));
	};

	const TEXTS = {
		en: {
			pageTitle: "Exercises UseContext",
			welcome: "Welcome",
			loginFormTitle: "Login Form",
			labelName: "Name",
			labelSurname: "Surname",
			labelEmail: "Email",
			inputNamePlaceholder: "Insert a Name",
			inputSurnamePlaceholder: "Insert a Surname",
			inputEmailPlaceholder: "Insert an Email",
			loginButton: "Log in",
			resetButton: "Reset Form",
			logoutButton: "Log out",
		},
		es: {
			spanishLabel: "Español",
			englishLabel: "Inglés",
			pageTitle: "Ejercicios UseContext",
			welcome: "Bienvenido",
			loginFormTitle: "Formulario Inicio sesión",
			labelName: "Nombre",
			labelSurname: "Apellidos",
			labelEmail: "Correo electrónico",
			inputNamePlaceholder: "Introduzca un nombre",
			inputSurnamePlaceholder: "Introduzca un apellido",
			inputEmailPlaceholder: "Introduzca un correo electrónico",
			loginButton: "Iniciar sesión",
			resetButton: "Borrar Formulario",
			logoutButton: "Cerrar Sesión",
		},
	};

	return <LanguageContext value={{ lang, TEXTS, onToggleLang }}>{children}</LanguageContext>;
};
