import { User } from "types";
import {  SET_CURRENT_USER, UserAction } from "utils/redux/user/user.actions";



type INITIAL_STATE = {
  currentUser:User | null
}

const initialUserState:INITIAL_STATE = {
  currentUser: null
};

const userReducer = ( state = initialUserState, action:UserAction ) => {
  switch( action.type ){
  case SET_CURRENT_USER:
    return {
      ...state,
      currentUser: action.payload
    };
  default: 
    return state;
  }
};

export default userReducer;