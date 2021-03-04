import React from "react";
import { useClearItemFromCart } from "utils/redux/cart/cart.hooks";
import { CartItem } from "utils/redux/cart/cart.reducer";
import "./checkout-item.styles.scss";

type CheckoutItemProps = {
  item:CartItem
}
const CheckoutItem = ( { item }:CheckoutItemProps ) => {
  const { name, quantity, price, imageUrl, id } = item; 
  const clear = useClearItemFromCart();

 
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name}/>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => {clear( id );}}>✕</span>
    </div>
  );
};

export default CheckoutItem;