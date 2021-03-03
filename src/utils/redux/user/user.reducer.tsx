import { User } from "types";

const SET_CURRENT_USER = "SET_CURRENT_USER" as const;
export const setCurrentUser = ( user:User ) => ( {
  type: SET_CURRENT_USER,
  payload: user
} );


type UserAction = 
| ReturnType<typeof setCurrentUser>

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