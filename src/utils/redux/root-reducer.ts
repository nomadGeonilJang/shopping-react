import { combineReducers } from "redux";
import user from "utils/redux/user/user.reducer";
import cart from "utils/redux/cart/cart.reducer";


const rootReducer = combineReducers( {
  user,
  cart
} );

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>