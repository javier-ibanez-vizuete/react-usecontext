import { useContext } from "react";
import "./App.css";
import { Header } from "./components/header/header";
import { ThemeContext } from "./context/ThemeContext";
import { Subtitle } from "./components/Subtitle/Subtitle";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { UserContext } from "./context/UserContext";
import { LanguageContext } from "./context/LanguageContext";

export const App = () => {
	const { lang, TEXTS, onToggleLang } = useContext(LanguageContext);
	const { theme, onToggleTheme } = useContext(ThemeContext);
	const { user, userLogout } = useContext(UserContext);

	console.log(lang);

	return (
		<>
			<button onClick={onToggleTheme} className={`${theme}`}>
				{theme === "light" ? "🌙" : "🌞"}
			</button>
			<Header>
				<h1>{TEXTS[lang]?.pageTitle}</h1>
				<h2>
					{TEXTS[lang].welcome} {user?.role === "admin" ? user?.name : "Invitado"}
				</h2>
			</Header>
			<main className={`${theme}`}>
				<Subtitle text={"Subtitulo"} />
				{!user?.name && <LoginForm />}
			</main>
			<footer>
				{user?.name && <button onClick={userLogout}>{TEXTS[lang].logoutButton}</button>}
				<select name="lang" id="lang" value={lang} onChange={onToggleLang}>
					<option value="">Selecciona un idioma</option>
					{Object.keys(TEXTS).map((lang) => {
						return (
							<option key={lang} value={lang}>
								{lang === "en" ? "Englis" : "Spanish"}
							</option>
						);
					})}
				</select>
			</footer>
		</>
	);
};
