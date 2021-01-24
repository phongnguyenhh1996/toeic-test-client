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
import { Reset } from 'styled-reset'
import { Normalize } from 'styled-normalize'
import { SnackbarProvider } from 'notistack';

export default function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Provider store={store}>
      <Reset />
      <Normalize />
      <StylesProvider injectFirst>
        <Router>
          <RouterCustom/>
        </Router>
      </StylesProvider>
    </Provider>
    </SnackbarProvider>
  );
}

sagaMiddleware.run(rootSaga)
