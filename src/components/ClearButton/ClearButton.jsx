import { useContext } from "react";
import { PermissionsContext } from "../../context/PermissionsContext";

export const ClearButton = ({ children, handleButton, className }) => {
	const { can } = useContext(PermissionsContext);

	if (!can("delete")) return null;

	return (
		<button className={className} onClick={handleButton}>
			{children}
		</button>
	);
};
