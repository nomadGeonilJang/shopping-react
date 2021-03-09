import { useSelector, useDispatch } from "react-redux";
import { User } from "types";
import { RootState } from "utils/redux/root-reducer";
import { emailSignInRequest, googleSignInRequest, setCurrentUser } from "utils/redux/user/user.actions";


export const useUser = () => {
  return useSelector( ( state:RootState ) => state.user );
};

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

