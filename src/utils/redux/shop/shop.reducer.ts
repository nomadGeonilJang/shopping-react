
import { CartItem } from "utils/redux/cart/cart.reducer";
import { ShopAction } from "./shop.actions";
import SHOP_DATA from "./shop.data";

type Collection = {
  id:number;
  title:string;
  routeName: string;
  items:CartItem[]
}

type INITIAL_STATE = {
  collections:Collection[]
}
const initialShopState:INITIAL_STATE = {
  collections: SHOP_DATA
};

const shopReducer = ( state = initialShopState, action:ShopAction ) => {
  return state;
};

export default shopReducer;