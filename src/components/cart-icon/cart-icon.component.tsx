import React from "react";
import { ReactComponent as ShoppingIcon } from "assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { useToggleCart } from "utils/redux/cart/cart.hooks";

const CartIcon = () => {
  const toggleCart = useToggleCart();
  return (
    <div className="cart-icon" onClick={() => toggleCart()}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">0</span>
    </div>
  );
};
export default CartIcon;