import { CartAction } from "utils/redux/cart/cart.actions";
import { CartActionTypes } from "utils/redux/cart/cart.types";
import { addItemToCart, removeToCart, clearItemFromCart } from "utils/redux/cart/cart.utils";

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
  case CartActionTypes.REMOVE_ITEM:
    return {
      ...state,
      cartItems: removeToCart( state.cartItems, action.payload )
    };

  case CartActionTypes.CLEAR_ITEM_FROM_CART:
    return {
      ...state,
      cartItems: clearItemFromCart( state.cartItems, action.payload )
    };


  case CartActionTypes.CLEAR_CART:
    return {
      ...state,
      cartItems: []
    };
  default:
    return state;
  }
};

export default cartReducer;