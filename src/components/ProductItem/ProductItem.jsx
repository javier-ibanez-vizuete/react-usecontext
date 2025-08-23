import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { AddButton } from "../AddButton/AddButton";
import { DeleteButton } from "../DeleteButton/DeleteButton";

export const ProductItem = ({ dataProduct }) => {
	const { addItem, removeItem } = useContext(CartContext);

	return (
		<div className="product-item">
			<h4>{dataProduct.name}</h4>
			<h3>{dataProduct.price}€</h3>
			<div className="btns-quantity-container">
				<DeleteButton handleButton={removeItem} data={dataProduct.id}>
					-
				</DeleteButton>
				<p>{dataProduct.qty}</p>
				<AddButton text={"F"} handleButton={addItem} data={dataProduct}>
					+
				</AddButton>
			</div>
		</div>
	);
};
