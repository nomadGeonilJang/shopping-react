import React, { useLayoutEffect, useState }from 'react';
import {  Route, Switch } from "react-router-dom";

import HomePage from "pages/homepage/homepage.component";
import ShopPage from "pages/shop/shop.component";
import SignInAndSignUpPage from "pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from 'components/header/header.component';

import { auth, createUserProfileDocument } from "utils/firebase/firebase.utils"; 
import { User } from 'types';


function App() {

  const [ appState, setAppState ] = useState<{currentUser: User | null}>( {
    currentUser: null
  } );

  useLayoutEffect( () => {
    const unsubscribeFromAuth  = auth.onAuthStateChanged( async ( userAuth ) => {

      if( userAuth ){
        const userRef = await createUserProfileDocument( userAuth, {} );
        userRef.onSnapshot( snapShop => {
          setAppState( {
            currentUser: {
              id: snapShop.id,
              ...( snapShop.data() as User )
            }
          } );
        } );
      }
      
      setAppState( {
        currentUser: ( userAuth as User | null )
      } );
      
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
