import { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import { ProductItem } from "../ProductItem/ProductItem";
import { LanguageContext } from "../../context/LanguageContext";

export const Cart = () => {
	const { items, clearCart } = useContext(CartContext);
	const { lang, TEXTS } = useContext(LanguageContext);

	if (!items.length) return <h4>{TEXTS[lang].noCartsElements}</h4>;

	return (
		<section className="cart-section">
			{items.length > 0 && (
				<button className={"btn-delete-trolly"} onClick={clearCart}>
					{TEXTS[lang].deleteCartLabel}
				</button>
			)}
			{items.length > 0 &&
				items
					.sort((itemA, itemB) => itemB.id - itemA.id)
					.map((product) => {
						return <ProductItem key={product.id} dataProduct={product} />;
					})}
		</section>
	);
};
