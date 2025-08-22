import { createContext, useState } from "react";

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
	const [lang, setLang] = useState("en");

	const onToggleLang = () => {
		setLang((prevLang) => (prevLang === "en" ? "es" : "en"));
	};

	const TEXTS = {
		en: {
			emptylanguage: "Select a language",
			englishlanguage: "English",
			spanishlanguage: "Spanish",
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
			home: "Home",
			cart: "Cart",
			noCartsElements: "There's not elements on the Trolly",
			deleteCartLabel: "Delete Trolly",
		},
		es: {
			emptylanguage: "Seleccione un Idioma",
			englishlanguage: "Ínglés",
			spanishlanguage: "Español",
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
			home: "Pagina Principal",
			cart: "Carrito",
			noCartsElements: "No hay Elementos en el carrito",
			deleteCartLabel: "Borrar Carrito",
		},
	};

	return <LanguageContext value={{ lang, TEXTS, onToggleLang }}>{children}</LanguageContext>;
};
