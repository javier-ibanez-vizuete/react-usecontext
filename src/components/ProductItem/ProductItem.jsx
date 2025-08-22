import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const ProductItem = ({ dataProduct }) => {
	const { addItem, removeItem } = useContext(CartContext);

	return (
		<div className="product-item">
			<h4>{dataProduct.name}</h4>
			<h3>{dataProduct.price}€</h3>
			<div className="btns-quantity-container">
				<button onClick={() => removeItem(dataProduct.id)}>-</button>
				<p>{dataProduct.qty}</p>
				<button onClick={() => addItem(dataProduct)}>+</button>
			</div>
		</div>
	);
};
