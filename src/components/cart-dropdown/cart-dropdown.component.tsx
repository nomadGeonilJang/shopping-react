import React, { memo } from "react";
import "./cart-dropdown.styles.scss";

import CustomButton from "components/custom-button/custom-button.component";
import CartItem from "components/cart-item/cart-item.component";
import { useCart } from "utils/redux/cart/cart.hooks";

const CartDropDown = () => {
  const { cartItems } = useCart();
  
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map( cartItem => <CartItem key={cartItem.id} item={cartItem}/> )}
      </div>      
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default memo( CartDropDown );