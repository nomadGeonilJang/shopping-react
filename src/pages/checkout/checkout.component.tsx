import CheckoutItem from "components/checkout-item/checkout-item.component";
import React from "react";
import { useCart, useTotalPrice } from "utils/redux/cart/cart.hooks";
import "./checkout.styles.scss";

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
      
      <div className="total">
        <span>TOTAL: ${totalPrice}</span>
      </div>
    </div>
  );
};
export default Checkout;