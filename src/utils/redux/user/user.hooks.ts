import { useSelector, useDispatch } from "react-redux";
import { User } from "types";
import { RootState } from "utils/redux/root-reducer";
import { checkUserSession, emailSignInRequest, googleSignInRequest, setCurrentUser, signOutStart } from "utils/redux/user/user.actions";

export const useUser = () => useSelector( ( state:RootState ) => state.user );

export const useSetUser = () => {
  const dispatch = useDispatch();
  return ( user:User ) => dispatch( setCurrentUser( user ) );
};

export const useGoogleSignIn = () => {
  const dispatch = useDispatch();
  return () => dispatch( googleSignInRequest() );
};

export const useEmailAndPasswordSignIn = () => {
  const dispatch = useDispatch();
  return ( emailAndPassword:{email:string, password:string} ) => dispatch( emailSignInRequest( emailAndPassword ) );
};

export const useCheckUserSession = () => {
  const dispatch = useDispatch();
  return () => dispatch( checkUserSession() );
};

export const useSignOut = () => {
  const dispatch = useDispatch();
  return () => dispatch( signOutStart() );
};