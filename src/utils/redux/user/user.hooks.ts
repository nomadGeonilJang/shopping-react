import { useSelector, useDispatch } from "react-redux";
import { User } from "types";
import { RootState } from "utils/redux/root-reducer";
import { setCurrentUser } from "utils/redux/user/user.actions";


export const useUser = () => {
  return useSelector( ( state:RootState ) => state.user );
};
export const useSetUser = () => {
  const dispatch = useDispatch();
  return ( user:User ) => dispatch( setCurrentUser( user ) );
};