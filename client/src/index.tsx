import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "App";

import GlobalStyles from 'utils/styles/globalStyles';
import { store, persistor } from 'utils/redux/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles/>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById( 'root' )
);




