import React, { useLayoutEffect, useState }from 'react';
import {  Route, Switch } from "react-router-dom";

import HomePage from "pages/homepage/homepage.component";
import ShopPage from "pages/shop/shop.component";
import SignInAndSignUpPage from "pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from 'components/header/header.component';

import { auth } from "utils/firebase/firebase.utils"; 

function App() {

  const [ appState, setAppState ] = useState<{currentUser:any}>( {
    currentUser: null
  } );

  useLayoutEffect( () => {
    const unsubscribeFromAuth  = auth.onAuthStateChanged( ( currentUser ) => {
      setAppState( { currentUser } );
    } );
    return () => {
      unsubscribeFromAuth();
    };
  }, [] );


  return (
    <>
      <Header currentUser={appState.currentUser}/>
      <Switch>
        <Route exact path="/" ><HomePage/></Route>
        <Route path="/shop"><ShopPage/></Route>
        <Route path="/signin"><SignInAndSignUpPage/></Route>
      </Switch>
    </>
  );
}

export default App;
