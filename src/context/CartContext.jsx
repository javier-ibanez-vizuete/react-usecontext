import { createContext, useState } from "react";
import { products } from "../utils/products.js";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
	const [items, setItems] = useState(products);

	const addItem = (product) => {
		const productSelected = items.find((item) => item.id === product.id);
		if (!productSelected) return;

		const newQty = productSelected.qty + 1;
		const newProduct = { ...productSelected, qty: newQty };

		const restOfProducts = items.filter((item) => item.id !== product.id);
		const productsUpdated = [...restOfProducts, newProduct];

		setItems([...productsUpdated]);
	};

	const removeItem = (id) => {
		const productSelected = items.find((item) => item.id === id);
		if (!productSelected) return;
		if (productSelected.qty === 1) {
			const restOfProducts = items.filter((item) => item.id !== id);
			return setItems([...restOfProducts]);
		}

		const newQty = productSelected.qty - 1;
		const newProduct = { ...productSelected, qty: newQty };

		const restOfProducts = items.filter((item) => item.id !== id);
		const productsUpdated = [...restOfProducts, newProduct];

		setItems([...productsUpdated]);
	};

	const clearCart = () => {
		setItems([]);
	};

	return <CartContext value={{ items, addItem, removeItem, clearCart }}>{children}</CartContext>;
};
