
import { CartItem } from "utils/redux/cart/cart.reducer";
import { CollectionID } from "utils/redux/shop/shop.hooks";
import { ShopActionTypes } from "utils/redux/shop/shop.types";
import { ShopAction } from "./shop.actions";

export type Collection = {
  id:number;
  title:string;
  routeName: string;
  items:CartItem[]
}

export type CollectionsMap = {
  [key in CollectionID]: Collection;
}; 

type INITIAL_STATE = {
  collections:{
    hats:Collection
    sneakers:Collection
    jackets:Collection
    womens:Collection
    mens:Collection
  } | null
}
const initialShopState:INITIAL_STATE = {
  collections: null
};

const shopReducer = ( state = initialShopState, action:ShopAction ) => {

  switch( action.type ){
  case ShopActionTypes.UPDATE_COLLECTIONS:
    return{
      ...state,
      collections: action.payload
    };

  default:
    return state;
  }


  
};

export default shopReducer;