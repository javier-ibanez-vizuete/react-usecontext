import { createContext, useState } from "react";

const INITIAL_USER_STATE = {
	id: "",
	name: "",
	surname: "",
	email: "",
	role: "Guest",
};

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(INITIAL_USER_STATE);

	const userLogin = (userData) => {
		const { userName, userSurname, userEmail } = userData;
		setUser((prevUserData) => {
			if (!prevUserData.id) {
				const randomNumber = (Math.random() * 10).toFixed(2);
				const newId = `${userName}-${randomNumber}`;
				return {
					...prevUserData,
					id: newId,
					name: userName,
					surname: userSurname,
					email: userEmail,
					role: "admin",
				};
			}

			return {
				...prevUserData,
				name: userName,
				surname: userSurname,
				email: userEmail,
				role: "admin",
			};
		});
	};

	const userLogout = () => {
		setUser(INITIAL_USER_STATE);
	};

	return <UserContext value={{ user, userLogin, userLogout }}>{children}</UserContext>;
};
