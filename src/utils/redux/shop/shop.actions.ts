import { CollectionsMap } from "utils/redux/shop/shop.reducer";
import { ShopActionTypes } from "utils/redux/shop/shop.types";


export const updateCollections = ( collectionsMap:CollectionsMap ) => ( {
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
} );

export type ShopAction = 
| ReturnType<typeof updateCollections> 