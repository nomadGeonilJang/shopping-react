import { CartAction } from "utils/redux/cart/cart.actions";
import { CartActionTypes } from "utils/redux/cart/cart.types";
type INITIAL_STATE = {
  hidden:boolean
}

const initialCartState :INITIAL_STATE = {
  hidden: true
};

const cartReducer = ( state = initialCartState, action:CartAction ) => {
  switch( action.type ){
  
  case CartActionTypes.TOGGLE_CART_HIDDEN:
    return {
      ...state,
      hidden: !state.hidden
    };

  default:
    return state;
  }
};

export default cartReducer;