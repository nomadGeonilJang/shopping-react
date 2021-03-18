import React, { useEffect, lazy } from 'react';
import {  Redirect, Route, Switch } from "react-router-dom";

import { useCheckUserSession, useUser } from 'utils/redux/user/user.hooks';

const  HomePage = lazy( () => import( "pages/homepage/homepage.component" ) );
const  ShopPage = lazy( () => import( "pages/shop/shop.component" ) );
const  SignInAndSignUpPage = lazy( () => import( "pages/sign-in-and-sign-up/sign-in-and-sign-up.component" ) );
const  CheckoutPage = lazy( () => import( "pages/checkout/checkout.component" ) );
const  Header = lazy( () => import( 'components/header/header.component' ) );


function App() {
  const user = useUser();
  const isLoggedIn = user.currentUser;
  const checkUserSession = useCheckUserSession();

  useEffect( () => {
    checkUserSession();
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
