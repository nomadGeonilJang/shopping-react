import { useSelector } from "react-redux";
import { RootState } from "utils/redux/root-reducer";

export type CollectionID =  "hats" | "sneakers" | "jackets" | "womens" | "mens"

export const useShop = () => {
  return useSelector( ( state:RootState ) => state.shop );
};
export const useCollections = () => {
  const { collections } = useSelector( ( state:RootState ) => state.shop );
  const collectionKeys = Object.keys( collections ) as CollectionID[];
  return collectionKeys.map( collectionKey => collections[ collectionKey ] );
};
export const useSelectCollectionWithCollectionId = ( collectionId:CollectionID ) => {
  const { collections } = useSelector( ( state:RootState ) => state.shop );
  return collections[ collectionId ];
};
