import React from 'react';
import './App.css';
import { StylesProvider } from '@material-ui/core/styles';
import { Provider } from "react-redux";
import { sagaMiddleware } from "./middleware";
import rootSaga from "./sagas";
import store, { history } from "./store";
import RouterCustom from './routes'
import { Reset } from 'styled-reset'
import { Normalize } from 'styled-normalize'
import { SnackbarProvider } from 'notistack';
import { ConnectedRouter } from 'connected-react-router'

export default function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Reset />
          <Normalize />
          <StylesProvider injectFirst>
            <RouterCustom/>
          </StylesProvider>
        </ConnectedRouter>
      </Provider>
    </SnackbarProvider>
  );
}

sagaMiddleware.run(rootSaga)
