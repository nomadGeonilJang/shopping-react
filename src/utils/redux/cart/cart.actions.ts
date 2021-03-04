import { CartItem } from "utils/redux/cart/cart.reducer";
import { CartActionTypes } from "utils/redux/cart/cart.types";

export const toggleCart = () => ( { type: CartActionTypes.TOGGLE_CART_HIDDEN } ); 
export const addItem = ( item:CartItem ) => ( { type: CartActionTypes.ADD_ITEM, payload: item } );

export type CartAction = 
| ReturnType<typeof toggleCart>
| ReturnType<typeof addItem>
