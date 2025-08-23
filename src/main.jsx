import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { PermissionsProvider } from "./context/PermissionsContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<LanguageProvider>
			<CartProvider>
				<UserProvider>
					<PermissionsProvider>
						<ThemeProvider>
							<App />
						</ThemeProvider>
					</PermissionsProvider>
				</UserProvider>
			</CartProvider>
		</LanguageProvider>
	</StrictMode>
);
