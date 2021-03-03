import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import moment from "moment";

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





const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( {
  prompt: 'select_account'
} );

export const signInWithGoogle = () => auth.signInWithPopup( provider );

export default firebase;