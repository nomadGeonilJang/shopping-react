import { takeLatest, put, all, call } from "redux-saga/effects";
import { auth, createUserProfileDocument, googleProvider, getCurrentUser } from "utils/firebase/firebase.utils";
import { signInSuccess, signInFailure, signOutFailure, signOutSuccess } from "utils/redux/user/user.actions";
import UserActionTypes from "utils/redux/user/user.types";

function* getSnapshotFromUserAuth( userAuth, additionalData ) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put( signInSuccess( { id: userSnapshot.id, ...userSnapshot.data() } ) );
  } catch ( error ) {
    yield put( signInFailure( error ) );
  }
}

function* signInGoogle(){
  try {
    const { user } = yield auth.signInWithPopup( googleProvider );
    yield getSnapshotFromUserAuth( user );
  } catch ( error ) {
    yield put( signInFailure( error ) );
  }
}

function* onGoogleSignInStart(){
  yield takeLatest( UserActionTypes.GOOGLE_SIGN_IN_REQUEST, signInGoogle );
}


function* signInEmail( { payload: { email, password } } ){
  try {
    const { user } = yield auth.signInWithEmailAndPassword( email, password );
    yield getSnapshotFromUserAuth( user );    
  } catch ( error ) {
    yield put( signInFailure( error ) );
  }
}

function* onEmailSignIn(){
  yield takeLatest( UserActionTypes.EMAIL_SIGN_IN_REQUEST, signInEmail );
}

function* isUserAuthenticated(){
  try {
    const userAuth = yield getCurrentUser();
    if( !userAuth ) return;
    yield getSnapshotFromUserAuth( userAuth );
  } catch ( error ) {
    yield put( signInFailure( error ) );
  }
}

function* onCheckUserSession(){
  yield takeLatest( UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated );
}

function* signOut(){
  try {
    yield auth.signOut();
    yield put( signOutSuccess() );
  } catch ( error ) {
    yield put( signOutFailure( error ) );
  }
}

function* onSignOut(){
  yield takeLatest( UserActionTypes.SIGN_OUT_REQUEST, signOut );
}



export function* userSagas(){
  yield all( [
    call( onGoogleSignInStart ),
    call( onEmailSignIn ),
    call( onCheckUserSession ),
    call( onSignOut ),
  ] );
}