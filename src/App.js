import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css';
import { StylesProvider } from '@material-ui/core/styles';
import { Provider } from "react-redux";
import { sagaMiddleware } from "./middleware";
import rootSaga from "./sagas";
import store from "./store";
import RouterCustom from './routes'

export default function App() {
  return (
    <Provider store={store}>
      <StylesProvider injectFirst>
        <Router>
          <RouterCustom/>
        </Router>
      </StylesProvider>
    </Provider>
  );
}

sagaMiddleware.run(rootSaga)
