import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { Tabs } from "./Tabs";
import "./Navigation.css";
import { CartContext } from "../../context/CartContext";

export const Navigation = ({ activeTab, onHandleTab }) => {
	const { lang, TEXTS } = useContext(LanguageContext);
	const { items } = useContext(CartContext);

	return (
		<nav className="navigation">
			{Object.entries(Tabs).map(([property, value]) => {
				return (
					<button
						key={property}
						className={`tab ${activeTab === value ? "active" : ""}`}
						onClick={() => onHandleTab(value)}
					>
						{TEXTS[lang][property]}
						{TEXTS[lang][property] === TEXTS[lang].cart ? <span className="span-cart">{items?.length}</span> : ""}
					</button>
				);
			})}
		</nav>
	);
};
