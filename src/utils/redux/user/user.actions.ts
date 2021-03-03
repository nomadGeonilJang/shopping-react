import { User } from "types";
import { UserActionTypes } from "utils/redux/user/user.types";


export const setCurrentUser = ( user:User ) => ( {
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
} );



export type UserAction = 
| ReturnType<typeof setCurrentUser>
