import React from 'react';
import {  Route, Switch } from "react-router-dom";

import HomePage from "components/homepage/homepage.component";




function App() {
  return (
    <Switch>
      <Route exact path="/" >
        <HomePage/>
      </Route>
    </Switch>
  );
}

export default App;
