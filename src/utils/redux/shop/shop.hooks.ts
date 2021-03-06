import { useDispatch, useSelector } from "react-redux";
import { RootState } from "utils/redux/root-reducer";
import { updateCollections } from "utils/redux/shop/shop.actions";
import { CollectionsMap } from "utils/redux/shop/shop.reducer";

export type CollectionID =  "hats" | "sneakers" | "jackets" | "womens" | "mens"

export const useShop = () => {
  return useSelector( ( state:RootState ) => state.shop );
};
export const useCollections = () => {
  const { collections } = useSelector( ( state:RootState ) => state.shop );
  if( !collections ){
    return collections;
  }
  const collectionKeys = Object.keys( collections ) as CollectionID[];
  return collectionKeys.map( collectionKey => collections[ collectionKey ] );
};
export const useSelectCollectionWithCollectionId = ( collectionId:CollectionID ) => {
  const { collections } = useSelector( ( state:RootState ) => state.shop );
  return collections ? collections[ collectionId ] : collections ;
};
export const useUpdateCollection = () => {
  const dispatch = useDispatch();
  return ( collectionsMap : CollectionsMap ) => dispatch( updateCollections( collectionsMap ) );
};