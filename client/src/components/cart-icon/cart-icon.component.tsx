import React, { memo } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "assets/shopping-bag.svg";
import { useCartItemsCount, useToggleCart } from "utils/redux/cart/cart.hooks";


const CartIcon = () => {
  const toggleCart = useToggleCart();
  const cartItemsCount = useCartItemsCount();

  return (
    <div className="cart-icon" onClick={() => toggleCart()}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};


export default memo( CartIcon );