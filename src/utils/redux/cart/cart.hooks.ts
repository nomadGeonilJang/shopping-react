import { useSelector, useDispatch } from "react-redux";
import { addItem, toggleCart } from "utils/redux/cart/cart.actions";
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
export const useCartItemsCount = () => {
  const { cartItems } = useCart();
  return cartItems.reduce( ( a, c ) => a + c.quantity!, 0 );
};