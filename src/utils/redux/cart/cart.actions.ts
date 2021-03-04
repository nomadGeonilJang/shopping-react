import { CartItem } from "utils/redux/cart/cart.reducer";
import { CartActionTypes } from "utils/redux/cart/cart.types";

export const toggleCart = () => ( { type: CartActionTypes.TOGGLE_CART_HIDDEN } ); 
export const addItem = ( item:CartItem ) => ( { type: CartActionTypes.ADD_ITEM, payload: item } );
export const clearItemFromCart = ( id:number|string ) => ( { type: CartActionTypes.CLEAR_ITEM_FROM_CART, payload: id } );

export type CartAction = 
| ReturnType<typeof toggleCart>
| ReturnType<typeof addItem>
| ReturnType<typeof clearItemFromCart>
