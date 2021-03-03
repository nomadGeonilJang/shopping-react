import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "App";

import GlobalStyles from 'utils/styles/globalStyles';
import store from 'utils/redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles/>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById( 'root' )
);




