import React from "react";
import { CartItem as CartItemType } from "utils/redux/cart/cart.reducer";
import "./cart-item.styles.scss";


type CartItemProps = {
  item :CartItemType
}

const CartItem = ( { item: { imageUrl, price, name, quantity } }:CartItemProps ) => {
  
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name}/>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{quantity} x ${price}</span>
      </div>
    </div>
  );
};

export default React.memo( CartItem );