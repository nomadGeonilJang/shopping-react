import React, { memo, useContext } from "react";
import { useHistory } from "react-router-dom";
import "./cart-dropdown.styles.scss";
import { useQuery, useMutation, gql } from "@apollo/client";

import CustomButton from "components/custom-button/custom-button.component";
import CartItem from "components/cart-item/cart-item.component";
import { CartContext } from "providers/cart/cart.provider";
import { GET_CART_ITEMS } from "graphql/resolvers";

const ADD_ITEM_TO_CART = gql`
  mutation AdItemToCart($item:Item!){
    addItemToCart(item:$item) @client
  }
`;



const CartDropDown = () => {
  const history = useHistory();
  const { toggleHidden, cartItems } = useContext( CartContext );
  
  const handleGoToCheckout = () => {
    toggleHidden();
    history.push( "/checkout" );
  };

  const { data } = useQuery( GET_CART_ITEMS );
  const [ addItemToCart, allDaa ] = useMutation( ADD_ITEM_TO_CART );
  console.log( "-->cart", data );
  
  const onAddTest = () => {
    addItemToCart( {
      variables: {
        item: { quantity: 2 }
      }
    } );
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length 
            ? cartItems.map( cartItem => <CartItem key={cartItem.id} item={cartItem}/> )
            : <span onClick={onAddTest} className="emptry-message">Your cart is empty</span>
        }
      </div>      
      <CustomButton onClick={handleGoToCheckout}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default memo( CartDropDown );