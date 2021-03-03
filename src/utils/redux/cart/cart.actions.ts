import { CartActionTypes } from "utils/redux/cart/cart.types";

export const toggleCart = () => ( { type: CartActionTypes.TOGGLE_CART_HIDDEN } ); 

export type CartAction = 
| ReturnType<typeof toggleCart>
