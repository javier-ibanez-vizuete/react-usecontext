import { useContext, useState } from "react";
import "./App.css";
import { Header } from "./components/header/header";
import { ThemeContext } from "./context/ThemeContext";
import { Subtitle } from "./components/Subtitle/Subtitle";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { UserContext } from "./context/UserContext";
import { LanguageContext } from "./context/LanguageContext";
import { Navigation } from "./components/Navigation/Navigation";
import { Tabs } from "./components/Navigation/Tabs";
import { Cart } from "./components/Cart/Cart";

export const App = () => {
	const { lang, TEXTS, onToggleLang } = useContext(LanguageContext);
	const { theme, onToggleTheme } = useContext(ThemeContext);
	const { user, userLogout } = useContext(UserContext);

	const [activeTab, setActiveTab] = useState(Tabs.home);

	const onHandleTab = (tabValue) => {
		setActiveTab(tabValue);
	};

	return (
		<>
			<button onClick={onToggleTheme} className={`${theme}`}>
				{theme === "light" ? "🌙" : "🌞"}
			</button>
			<Header>
				{user?.name && <Navigation activeTab={activeTab} onHandleTab={onHandleTab} />}
				<h1>{TEXTS[lang]?.pageTitle}</h1>
				<h2>
					{TEXTS[lang].welcome} {user?.role === "admin" ? user?.name : "Invitado"}
				</h2>
			</Header>
			<main className={`${theme}`}>
				<Subtitle text={"TEXTO DEL SUBTITULO"} />
				{!user?.name && <LoginForm />}
				{activeTab === Tabs.cart && <Cart />}
			</main>
			<footer className={`footer ${theme}`}>
				{user?.name && <button onClick={userLogout}>{TEXTS[lang].logoutButton}</button>}
				<select name="lang" id="lang" value={lang} onChange={onToggleLang}>
					{Object.keys(TEXTS).map((language) => {
						return (
							<option key={language} value={language}>
								{language === "en" ? TEXTS[lang].englishlanguage : TEXTS[lang].spanishlanguage}
							</option>
						);
					})}
				</select>
			</footer>
		</>
	);
};
