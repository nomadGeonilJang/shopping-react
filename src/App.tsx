import React from 'react';
import {  Route, Switch } from "react-router-dom";

import HomePage from "pages/homepage/homepage.component";
import ShopPage from "pages/shop/shop.component";
import SignInAndSignUpPage from "pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from 'components/header/header.component';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" >
          <HomePage/>
        </Route>
        <Route path="/shop">
          <ShopPage/>
        </Route>
        <Route path="/signin">
          <SignInAndSignUpPage/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
