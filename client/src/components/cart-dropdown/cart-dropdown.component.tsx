import React, { memo, useContext } from "react";
import { useHistory } from "react-router-dom";
import "./cart-dropdown.styles.scss";

import CustomButton from "components/custom-button/custom-button.component";
import CartItem from "components/cart-item/cart-item.component";
import { useCart } from "utils/redux/cart/cart.hooks";
import CartContext from "contexts/cart/cart.context";

const CartDropDown = () => {
  const history = useHistory();
  const { toggleHidden } = useContext( CartContext );
  const { cartItems } = useCart();

  
  const handleGoToCheckout = () => {
    
    toggleHidden();
    history.push( "/checkout" );
  };
  
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length 
            ? cartItems.map( cartItem => <CartItem key={cartItem.id} item={cartItem}/> )
            : <span className="emptry-message">Your cart is empty</span>
        }
      </div>      
      <CustomButton onClick={handleGoToCheckout}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default memo( CartDropDown );