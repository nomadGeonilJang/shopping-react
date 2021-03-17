import { call, put, all, takeLatest } from "redux-saga/effects";
import { clearCart } from "utils/redux/cart/cart.actions";
import UserActionTypes from "utils/redux/user/user.types";


function* clearCartOnSignOut(){
  yield put( clearCart() );
}
function* onSignOutSuccess(){
  yield takeLatest( UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut );
}

export function* cartSaga(){
  yield all( [
    call( onSignOutSuccess )
  ] );
}

