import {  createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import logger from "redux-logger";


import rootReducer from "utils/redux/root-reducer";

const middlewares = [ logger ];
const enhancerDev = composeWithDevTools( applyMiddleware( ...middlewares ) );
const enhancer = compose( applyMiddleware( ...middlewares ) );

const store = createStore( 
  rootReducer, 
  process.env.NODE_ENV !== 'production' ? enhancerDev : enhancer );
  
export default store;

