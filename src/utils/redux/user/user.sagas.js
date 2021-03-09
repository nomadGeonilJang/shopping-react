import { takeLatest, put, all, call } from "redux-saga/effects";
import { auth, createUserProfileDocument, googleProvider } from "utils/firebase/firebase.utils";
import { signInSuccess, signInFailure } from "utils/redux/user/user.actions";
import UserActionTypes from "utils/redux/user/user.types";


export function* signInGoogle(){
  try {
    const { user } = yield auth.signInWithPopup( googleProvider );
    const userRef = yield call( createUserProfileDocument, user );
    const userSnapShot = yield userRef.get();
    yield put( signInSuccess( {
      id: userSnapShot.id,
      ...userSnapShot.data()
    } ) );
  } catch ( error ) {
    yield put( signInFailure( error ) );
  }
}

export function* onGoogleSignInStart(){
  yield takeLatest( UserActionTypes.GOOGLE_SIGN_IN_REQUEST, signInGoogle );
}


export function* signInEmail( { payload: { email, password } } ){
  try {
    const { user } = yield auth.signInWithEmailAndPassword( email, password );
    const userRef = yield call( createUserProfileDocument, user );
    const userSnapShot = yield userRef.get();
    yield put( signInSuccess( {
      id: userSnapShot.id,
      ...userSnapShot.data()
    } ) );

    
  } catch ( error ) {
    yield put( signInFailure( error ) );
  }
}

export function* onEmailSignIn(){
  yield takeLatest( UserActionTypes.EMAIL_SIGN_IN_REQUEST, signInEmail );
}


export function* userSagas(){
  yield all( [
    call( onGoogleSignInStart ),
    call( onEmailSignIn )
  ] );
}