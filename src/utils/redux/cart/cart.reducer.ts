import { CartAction } from "utils/redux/cart/cart.actions";
import { CartActionTypes } from "utils/redux/cart/cart.types";
import { addItemToCart } from "utils/redux/cart/cart.utils";

export type CartItem = {
  id:number|string;
  name:string;
  price:string | number;
  imageUrl:string;
  quantity?:number;
}
type INITIAL_STATE = {
  hidden:boolean
  cartItems:CartItem[]
}

const initialCartState :INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = ( state = initialCartState, action:CartAction ) => {
  switch( action.type ){
  
  case CartActionTypes.TOGGLE_CART_HIDDEN:
    return {
      ...state,
      hidden: !state.hidden
    };

  case CartActionTypes.ADD_ITEM:
    
    return {
      ...state,
      cartItems: addItemToCart( state.cartItems, action.payload )
    };

  default:
    return state;
  }
};

export default cartReducer;