import React, { useState, useEffect, createContext } from "react";
import { CartItem } from "utils/redux/cart/cart.reducer";
import { addItemToCart, removeToCart, clearItemFromCart as clear, getCartItemsCount } from "./cart.utils";


export const CartContext = createContext( {
  hidden: true,
  cartItems: [] as CartItem[],
  cartItemsCount: 0,

  toggleHidden: () => {console.log( "toggleHidden" );},
  addItem: ( item:CartItem ) => {console.log( item );},
  removeItem: ( item:CartItem ) => {console.log( item );},
  clearItemFromCart: ( id:number|string ) => {console.log( id );},
  
} );


const CartProvider = ( { children }:any ) => {
  const [ hidden, setHidden ] = useState( true );
  const [ cartItems, setCartItems ] = useState<CartItem[]>( [] );
  const [ cartItemsCount, setCartItemsCount ] = useState( 0 );
  
  const toggleHidden = () => setHidden( !hidden );  
  const addItem = ( item:CartItem ) => setCartItems( addItemToCart( cartItems, item ) );
  const removeItem = ( item:CartItem ) => setCartItems( removeToCart( cartItems, item ) );
  const clearItemFromCart = ( id:string | number ) => setCartItems( clear( cartItems, id ) );

  useEffect( () => {
    setCartItemsCount( getCartItemsCount( cartItems ) );
  }, [ cartItems ] );

  return (
    <CartContext.Provider value={{
      hidden,
      cartItems,
      cartItemsCount,
      toggleHidden,
      addItem, removeItem, clearItemFromCart
    }}>
      {children}
    </CartContext.Provider>
  );
};



export default CartProvider;