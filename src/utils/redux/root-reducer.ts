import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


import user from "utils/redux/user/user.reducer";
import cart from "utils/redux/cart/cart.reducer";
import directory from "utils/redux/directory/directory.reducer";
import shop from "utils/redux/shop/shop.reducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [ 'cart' ]
};


const rootReducer = combineReducers( {
  user,
  cart,
  directory,
  shop
} );

export default persistReducer( persistConfig, rootReducer ) ;
export type RootState = ReturnType<typeof rootReducer>