import Redux, {  createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

import rootReducer from "utils/redux/root-reducer";

const middlewares:Redux.Middleware[] = [ thunk ];
if( process.env.NODE_ENV === "development" ){
  middlewares.push( logger );
}
const enhancerDev = composeWithDevTools( applyMiddleware( ...middlewares ) );
const enhancer = compose( applyMiddleware( ...middlewares ) );

export const store = createStore( 
  rootReducer, 
  process.env.NODE_ENV !== 'production' ? enhancerDev : enhancer );
  
export const persistor = persistStore( store );

export default { store, persistor };




