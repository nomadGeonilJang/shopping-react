
import { CollectionsMap } from "utils/redux/shop/shop.reducer";
import { ShopActionTypes } from "utils/redux/shop/shop.types";


export const fetchCollectionsStart = ( ) => ( {
  type: ShopActionTypes.FETCH_COLLECTIONS_REQUEST,
} );

export const fetchCollectionsSuccess = ( collectionsMap:CollectionsMap ) => ( {
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
} );
export const fetchCollectionsFailure = ( errorMessage:string ) => ( {
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
} );


export type ShopAction = 
| ReturnType<typeof fetchCollectionsStart> 
| ReturnType<typeof fetchCollectionsSuccess>
| ReturnType<typeof fetchCollectionsFailure>