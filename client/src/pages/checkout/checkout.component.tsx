import React from "react";
import "./checkout.styles.scss";

import CheckoutItem from "components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "components/stripe-button/stripe-button.component";
import { useCart, useTotalPrice } from "utils/redux/cart/cart.hooks";

const Checkout = () => {
  const { cartItems } = useCart();
  const totalPrice = useTotalPrice();

  return (
    <div className="checkout-page">
      <header className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </header>
      {
        cartItems.map( cartItem => <CheckoutItem key={cartItem.id} item={cartItem}/> )
      }
      
      <span className="total"> TOTAL: ${totalPrice}</span>
      <div className="test-warning">
        *Please use the following test creadit card for payments*
        <br/>
        4242 4242 4242 4242 - Exp :01/20 - CVV: 123
      </div>
      <StripeCheckoutButton price={totalPrice}/>
      
    </div>
  );
};
export default Checkout;