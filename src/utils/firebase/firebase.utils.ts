import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import moment from "moment";
import { CartItem } from "utils/redux/cart/cart.reducer";
import { CollectionsMap } from "utils/redux/shop/shop.reducer";


const config = {
  apiKey: "AIzaSyB_QaLhVY7j-8j3VSb1LjlXw1yHMXMIGHo",
  authDomain: "shop-db-47a63.firebaseapp.com",
  projectId: "shop-db-47a63",
  storageBucket: "shop-db-47a63.appspot.com",
  messagingSenderId: "112557293329",
  appId: "1:112557293329:web:fc57cdaba47e5512f356b0",
  measurementId: "G-Z7HN196XV2"
};

firebase.initializeApp( config );

export const addCollectionAndDocuments = async ( collectionKey:string, objectsToAdd:any ) => {
  const collectionRef = firestore.collection( collectionKey ); 
  const batch = firestore.batch();
  objectsToAdd.forEach( ( obj:any ) => {
    const newDocRef = collectionRef.doc();
    batch.set( newDocRef, obj );
  } );
  return batch.commit();

};

type Collection = {
  title:string;
  items:CartItem[]
}
type Doc = {
  id:string|number
  data:()=>Collection
}
export type ConvertCollectionsSnapshotToMap = {
  docs:Doc[]
}
export const convertCollectionsSnapshotToMap = ( collections:ConvertCollectionsSnapshotToMap ): CollectionsMap => {
  return  collections.docs.map( doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI( title.toLocaleLowerCase() ),
      id: doc.id,
      title,
      items
    };
  } ).reduce( ( acc:any, collection ) => {
    acc[  collection.title.toLocaleLowerCase()  ] = collection;
    return acc;
  }, {} );
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async ( userAuth: firebase.User | null, additionalData:any ) => {
  if( !userAuth ) {
    throw new Error( "user auth not found" );
  }

  const userRef = firestore.doc( `/users/${userAuth.uid}` );
  const snapShot = await userRef.get();

  if( !snapShot.exists ){
    const { displayName, email } = userAuth;
    const createdAt = moment().format( "YYYY-MM-DD" );
    try {
      await userRef.set( {
        displayName, email, createdAt, ...additionalData
      } );
    } catch ( error ) {
      console.log( 'error creating user', error.message );
    }
  }
  
  return userRef;
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters( {
  prompt: 'select_account'
} );

export const signInWithGoogle = () => auth.signInWithPopup( googleProvider );



export default firebase;