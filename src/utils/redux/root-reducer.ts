import { combineReducers } from "redux";
import user from "utils/redux/user/user.reducer";


const rootReducer = combineReducers( {
  user
} );

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>