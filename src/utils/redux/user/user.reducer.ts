import { User } from "types";
import {  UserAction } from "utils/redux/user/user.actions";
import { UserActionTypes } from "utils/redux/user/user.types"; 

type INITIAL_STATE = {
  currentUser:User | null
  error:Error|null
}

const initialUserState:INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = ( state = initialUserState, action:UserAction ) => {
  switch( action.type ){

  case UserActionTypes.GOOGLE_SIGN_IN_REQUEST:
  case UserActionTypes.EMAIL_SIGN_IN_REQUEST:
    return state;
  case UserActionTypes.SIGN_IN_SUCCESS:
    return {
      ...state,
      currentUser: action.payload,
      error: null
    };
  case UserActionTypes.SIGN_OUT_SUCCESS:
    return {
      ...state,
      currentUser: null,
      error: null
    };
  case UserActionTypes.SIGN_IN_FAILURE:
  case UserActionTypes.SIGN_OUT_FAILURE:
  case UserActionTypes.SIGN_UP_FAILURE:
    return {
      ...state,
      error: action.payload
    };
  case UserActionTypes.CHECK_USER_SESSION:
    return state;
  default: 
    return state;
  }
};

export default userReducer;