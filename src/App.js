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
import styled from 'styled-components'

const CustomSnackbar = styled(SnackbarProvider)`
  margin-top: 40px;
`

export default function App() {
  return (
    <CustomSnackbar maxSnack={3}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Reset />
          <Normalize />
          <StylesProvider injectFirst>
            <RouterCustom/>
          </StylesProvider>
        </ConnectedRouter>
      </Provider>
    </CustomSnackbar>
  );
}

sagaMiddleware.run(rootSaga)
