import { all, call } from "redux-saga/effects";
import { shopSagas } from "utils/redux/shop/shop.sagas"; 
import { userSagas } from "utils/redux/user/user.sagas";
import { cartSaga } from "utils/redux/cart/cart.sagas";
export default function* rootSaga(){
  yield all( [
    call( userSagas ),
    call( cartSaga ),
    call( shopSagas )
  ] );
} 