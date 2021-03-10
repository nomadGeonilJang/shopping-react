import { UserActionTypes } from "utils/redux/user/user.types";
import { User } from "types";


export const setCurrentUser = ( user:User ) => ( {
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
} );

export const googleSignInRequest = () => ( {
  type: UserActionTypes.GOOGLE_SIGN_IN_REQUEST
} ); 

export const emailSignInRequest = ( emailAndPassword:{email:string, password:string} ) => ( {
  type: UserActionTypes.EMAIL_SIGN_IN_REQUEST,
  payload: emailAndPassword
} ); 

export const signInSuccess = ( user:User ) => ( {
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
} ); 
export const signInFailure = ( error:Error ) => ( {
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
} ); 
export const checkUserSession = () => ( {
  type: UserActionTypes.CHECK_USER_SESSION
} );
export const signOutStart  = () => ( {
  type: UserActionTypes.SIGN_OUT_REQUEST
} );
export const signOutSuccess  = () => ( {
  type: UserActionTypes.SIGN_OUT_SUCCESS
} );

export const signOutFailure  = ( error:Error ) => ( {
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
} );




export type UserAction = 
| ReturnType<typeof setCurrentUser>
| ReturnType<typeof googleSignInRequest>
| ReturnType<typeof emailSignInRequest>
| ReturnType<typeof signInSuccess>
| ReturnType<typeof signInFailure>
| ReturnType<typeof checkUserSession>
| ReturnType<typeof signOutStart>
| ReturnType<typeof signOutSuccess>
| ReturnType<typeof signOutFailure>
