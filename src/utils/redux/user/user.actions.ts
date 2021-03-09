import { UserActionTypes } from "utils/redux/user/user.types";
import { User } from "types";


export const setCurrentUser = ( user:User ) => ( {
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
} );

export const googleSignInRequest = () => ( {
  type: UserActionTypes.GOOGLE_SIGN_IN_REQUEST
} ); 

export const googleSignInSuccess = ( user:User ) => ( {
  type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user
} ); 
export const googleSignInFailure = ( error:Error ) => ( {
  type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: error
} ); 

export const emailSignInRequest = ( emailAndPassword:{email:string, password:string} ) => ( {
  type: UserActionTypes.EMAIL_SIGN_IN_REQUEST,
  payload: emailAndPassword
} ); 

export const emailSignInSuccess = ( user:User ) => ( {
  type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user
} ); 
export const emailSignInFailure = ( error:Error ) => ( {
  type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
  payload: error
} ); 

export type UserAction = 
| ReturnType<typeof setCurrentUser>
| ReturnType<typeof googleSignInRequest>
| ReturnType<typeof googleSignInSuccess>
| ReturnType<typeof googleSignInFailure>
| ReturnType<typeof emailSignInRequest>
| ReturnType<typeof emailSignInSuccess>
| ReturnType<typeof emailSignInFailure>
