import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import Home from "./containers/Home/Home.tsx";
import Login from "./containers/Login/Login.tsx";
import MainLayout from "./components/Layout/MainLayout";
import { StylesProvider } from '@material-ui/core/styles';
import { Provider } from "react-redux";
import { sagaMiddleware } from "./middleware";
import rootSaga from "./sagas";
import store from "./store";

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        store.getState().user.token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <StylesProvider injectFirst>
        <Router>
            <MainLayout>
              <Switch>
                <Route path="/login">
                  <Login exact />
                </Route>
                <PrivateRoute exact path="/">
                  <Home />
                </PrivateRoute>
              </Switch>
            </MainLayout>
        </Router>
      </StylesProvider>
    </Provider>
  );
}

sagaMiddleware.run(rootSaga)