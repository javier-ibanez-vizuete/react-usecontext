import { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import { ProductItem } from "../ProductItem/ProductItem";
import { LanguageContext } from "../../context/LanguageContext";
import { PermissionsContext } from "../../context/PermissionsContext";
import { ClearButton } from "../ClearButton/ClearButton";

export const Cart = () => {
	const { can } = useContext(PermissionsContext);
	const { items, clearCart } = useContext(CartContext);
	const { lang, TEXTS } = useContext(LanguageContext);

	if (!can("view")) return null;
	if (!items.length) return <h4>{TEXTS[lang].noCartsElements}</h4>;

	return (
		<section className="cart-section">
			{items.length > 0 && (
				<ClearButton className={"btn-delete-trolly"} handleButton={clearCart}>
					{TEXTS[lang].deleteCartLabel}
				</ClearButton>
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
