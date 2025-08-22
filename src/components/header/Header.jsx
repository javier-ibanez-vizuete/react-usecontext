import { useContext } from "react";
import "./Header.css";
import { ThemeContext } from "../../context/ThemeContext";

export const Header = ({ children }) => {
	const { theme } = useContext(ThemeContext);

	return <header className={`header ${theme}`}>{children}</header>;
};
