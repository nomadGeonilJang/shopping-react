
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
  isFetching:boolean
  errorMessage?:string
}
const initialShopState:INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = ( state:INITIAL_STATE = initialShopState, action:ShopAction ) => {

  switch( action.type ){
  case ShopActionTypes.FETCH_COLLECTIONS_REQUEST:
    return {
      ...state,
      isFetching: true,
      errorMessage: undefined
    };
  
  case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
    return{
      ...state,
      isFetching: false,
      collections: action.payload
    };

  case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
    return{
      ...state,
      isFetching: false,
      errorMessage: action.payload
    };

  default:
    return state;
  }


  
};

export default shopReducer;