import { useSelector, useDispatch } from "react-redux";
import { addItem, clearCart, clearItemFromCart, removeItem, toggleCart } from "utils/redux/cart/cart.actions";
import { CartItem } from "utils/redux/cart/cart.reducer";
import { RootState } from "utils/redux/root-reducer";

export const useCart = () => useSelector( ( state:RootState ) => state.cart );
export const useToggleCart = () => {
  const dispatch = useDispatch();
  return () => dispatch( toggleCart() );
};
export const useAddItem = () => {
  const dispatch = useDispatch();
  return ( item:CartItem ) => dispatch( addItem( item ) ); 
};
export const useRemoveItem = () => {
  const dispatch = useDispatch();
  return ( item:CartItem ) => dispatch( removeItem( item ) );
};
export const useCartItemsCount = () => {
  const { cartItems } = useCart();
  return cartItems.reduce( ( a, c ) => a + c.quantity!, 0 );
};
export const useTotalPrice = () => {
  const { cartItems } = useCart();
  return cartItems.reduce( ( a, c ) => a + c.quantity! *  Number( c.price ), 0 );
};
export const useClearItemFromCart = () => {
  const  dispatch = useDispatch();
  return ( id:number|string ) => dispatch( clearItemFromCart( id ) );
};
export const useClearCart = () => {
  const dispatch = useDispatch();
  return () => dispatch( clearCart() );
};