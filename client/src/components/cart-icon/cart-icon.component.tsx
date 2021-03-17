import React, { memo, useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "assets/shopping-bag.svg";
import { useCartItemsCount } from "utils/redux/cart/cart.hooks";
import CartContext from "contexts/cart/cart.context";


const CartIcon = () => {
  
  const cartItemsCount = useCartItemsCount();
  const { toggleHidden } = useContext( CartContext );

  return (
    <div className="cart-icon" onClick={() => toggleHidden()}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};


export default memo( CartIcon );