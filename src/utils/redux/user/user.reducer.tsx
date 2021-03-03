import { User } from "types";
import {  UserAction } from "utils/redux/user/user.actions";
import { UserActionTypes } from "utils/redux/user/user.types"; 



type INITIAL_STATE = {
  currentUser:User | null
}

const initialUserState:INITIAL_STATE = {
  currentUser: null
};

const userReducer = ( state = initialUserState, action:UserAction ) => {
  switch( action.type ){
  case UserActionTypes.SET_CURRENT_USER:
    return {
      ...state,
      currentUser: action.payload
    };
  default: 
    return state;
  }
};

export default userReducer;