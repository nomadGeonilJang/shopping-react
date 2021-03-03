import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "utils/redux/cart/cart.actions";
import { RootState } from "utils/redux/root-reducer";

export const useCart = () => useSelector( ( state:RootState ) => state.cart );
export const useToggleCart = () => {
  const dispatch = useDispatch();
  return () => dispatch( toggleCart() );
};