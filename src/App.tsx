import React, { useLayoutEffect }from 'react';
import {  Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import HomePage from "pages/homepage/homepage.component";
import ShopPage from "pages/shop/shop.component";
import SignInAndSignUpPage from "pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from 'components/header/header.component';

import { auth, createUserProfileDocument } from "utils/firebase/firebase.utils"; 
import { User } from 'types';
import { setCurrentUser } from 'utils/redux/user/user.actions';

function App() {
  const dispatch = useDispatch();
  
  useLayoutEffect( () => {
    
    const unsubscribeFromAuth  = auth.onAuthStateChanged( async ( userAuth ) => {

      if( userAuth ){
        const userRef = await createUserProfileDocument( userAuth, {} );
        userRef.onSnapshot( snapShop => {
          dispatch( setCurrentUser( snapShop.data() as User ) );
        } );
      }
      
      dispatch( setCurrentUser( ( userAuth as unknown as User ) ) );
      
    } );
    return () => {
      unsubscribeFromAuth();
    };
  }, [] );

  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" ><HomePage/></Route>
        <Route path="/shop"><ShopPage/></Route>
        <Route path="/signin"><SignInAndSignUpPage/></Route>
      </Switch>
    </>
  );
}

export default App;
