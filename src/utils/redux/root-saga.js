import { all, call } from "redux-saga/effects";
import { fetchCollectionsStart } from "utils/redux/shop/shop.sagas"; 
import { userSagas } from "utils/redux/user/user.sagas";
export default function* rootSaga(){
  yield all( [
    call( fetchCollectionsStart ),
    call( userSagas )
  ] );
} 