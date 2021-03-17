import React from "react";
import { useAddItem, useClearItemFromCart, useRemoveItem } from "utils/redux/cart/cart.hooks";
import { CartItem } from "utils/redux/cart/cart.reducer";
import "./checkout-item.styles.scss";

type CheckoutItemProps = {
  item:CartItem
}
const CheckoutItem = ( { item }:CheckoutItemProps ) => {
  const { name, quantity, price, imageUrl, id } = item; 
  const clear = useClearItemFromCart();
  const addItem = useAddItem();
  const removeItem = useRemoveItem();

 
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name}/>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => {removeItem( item );}}>&lt;</div>
        <span className="value">
          {quantity}
        </span>
        <div className="arrow" onClick={() => {addItem( item );}}>&gt;</div>
      </span>
      <span className="price">${price}</span>
      <span className="remove-button" onClick={() => {clear( id );}}>✕</span>
    </div>
  );
};

export default CheckoutItem;