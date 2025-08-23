import { useContext } from "react";
import { PermissionsContext } from "../../context/PermissionsContext";

export const DeleteButton = ({ children, handleButton, data }) => {
	const { can } = useContext(PermissionsContext);

	if (!can("edit")) return null;

	return <button onClick={() => handleButton(data)}>{children}</button>;
};
