import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";

export const PermissionsContext = createContext(null);

const permissions = {
	guest: { view: true, edit: false, delete: false },
	user: { view: true, edit: true, delete: false },
	admin: { view: true, edit: true, delete: true },
};

export const PermissionsProvider = ({ children }) => {
	const { user } = useContext(UserContext);
	const role = user?.role || "guest";

	const can = (action) => {
		return permissions[role][action];
	};

	return <PermissionsContext value={{ role, can }}>{children}</PermissionsContext>;
};
