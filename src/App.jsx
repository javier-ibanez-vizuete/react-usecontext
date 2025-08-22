import { useContext } from "react";
import "./App.css";
import { Header } from "./components/header/header";
import { ThemeContext } from "./context/ThemeContext";
import { Subtitle } from "./components/Subtitle/Subtitle";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { UserContext } from "./context/UserContext";

export const App = () => {
	const { theme, onToggleTheme } = useContext(ThemeContext);
	const { user, userLogout } = useContext(UserContext);
	console.log(user.role);

	return (
		<>
			<button onClick={onToggleTheme} className={`${theme}`}>
				{theme === "light" ? "🌙" : "🌞"}
			</button>
			<Header>
				<h1>Ejercicios UseContext</h1>
				<h2>Bienvenido {user?.role === "admin" ? user?.name : "Invitado"}</h2>
			</Header>
			<main className={`${theme}`}>
				<Subtitle text={"Subtitulo"} />
				{!user?.name && <LoginForm />}
			</main>
			<footer>{user?.name && <button onClick={userLogout}>Cerrar Sesion</button>}</footer>
		</>
	);
};
