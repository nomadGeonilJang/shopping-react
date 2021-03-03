import { User } from "types";

export const SET_CURRENT_USER = "SET_CURRENT_USER" as const;
export const setCurrentUser = ( user:User ) => ( {
  type: SET_CURRENT_USER,
  payload: user
} );



export type UserAction = 
| ReturnType<typeof setCurrentUser>
