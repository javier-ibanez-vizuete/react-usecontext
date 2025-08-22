import { useContext } from "react";
import "./App.css";
import { Header } from "./components/header/header";
import { ThemeContext } from "./context/ThemeContext";
import { Subtitle } from "./components/Subtitle/Subtitle";

export const App = () => {
	const { theme, onToggleTheme } = useContext(ThemeContext);

	return (
		<>
			<button onClick={onToggleTheme} className={`${theme}`}>
				{theme === "light" ? "🌙" : "🌞"}
			</button>
			<Header>
				<h1>Ejercicios UseContext</h1>
			</Header>
			<main className={`${theme}`}>
				<Subtitle text={"Subtitulo"} />
			</main>
		</>
	);
};
