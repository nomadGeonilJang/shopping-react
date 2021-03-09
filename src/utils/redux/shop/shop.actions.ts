
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

// export const fetchCollectionsStartAsync = () => {
//   return ( dispatch:Dispatch ) => {
//     dispatch( fetchCollectionsStart() );
//     const collectionRef = firestore.collection( "collections" );
//     collectionRef.get()
//       .then( async ( snapshot ) => {
//         const collectionsMap = convertCollectionsSnapshotToMap( snapshot as unknown as ConvertCollectionsSnapshotToMap );
//         dispatch( fetchCollectionsSuccess( collectionsMap ) );
//       } )
//       .catch( error => dispatch( fetchCollectionsFailure( error.message ) ) );
//   };
// };

export type ShopAction = 
| ReturnType<typeof fetchCollectionsStart> 
| ReturnType<typeof fetchCollectionsSuccess>
| ReturnType<typeof fetchCollectionsFailure>