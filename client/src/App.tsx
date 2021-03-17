import React, { useEffect } from 'react';
import {  Redirect, Route, Switch } from "react-router-dom";

import HomePage from "pages/homepage/homepage.component";
import ShopPage from "pages/shop/shop.component";
import SignInAndSignUpPage from "pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "pages/checkout/checkout.component";
import Header from 'components/header/header.component';
import { useCheckUserSession, useUser } from 'utils/redux/user/user.hooks';


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
