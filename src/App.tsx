import React, { useLayoutEffect }from 'react';
import {  Redirect, Route, Switch } from "react-router-dom";

import HomePage from "pages/homepage/homepage.component";
import ShopPage from "pages/shop/shop.component";
import SignInAndSignUpPage from "pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "pages/checkout/checkout.component";

import Header from 'components/header/header.component';

import { auth, createUserProfileDocument } from "utils/firebase/firebase.utils"; 
import { User } from 'types';
import { useSetUser, useUser } from 'utils/redux/user/user.hooks';

function App() {

  const setUser = useSetUser();
  const user = useUser();
  const isLoggedIn = user.currentUser;

  useLayoutEffect( () => {
    
    const unsubscribeFromAuth  = auth.onAuthStateChanged( async ( userAuth ) => {

      if( userAuth ){
        const userRef = await createUserProfileDocument( userAuth, {} );
        userRef.onSnapshot( snapShop => {
          setUser( snapShop.data() as User ) ;
        } );
      }
  
      setUser( userAuth as unknown as User ) ;
      
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
        <Route exact path="/checkout"><CheckoutPage/></Route>
        <Route exact path="/signin" render={() => {
          return isLoggedIn ? <Redirect to="/"/> : <SignInAndSignUpPage/>;
        }}/>
      </Switch>
    </>
  );
}

export default App;
