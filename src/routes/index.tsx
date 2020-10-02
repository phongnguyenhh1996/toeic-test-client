import React, { Fragment } from "react"
import { Switch, Route } from 'react-router-dom'
import { PrivateRoute } from "./privateRoute"
import { RouteItem } from "./routeItem.interface"
import routes from "./routes"

const RouterCustom = () => (
  <Switch>
    {routes.map((routeItem: RouteItem, index: number) => {
      const {layout: Layout = Fragment, component: Component, path, isAuthRoute, exact, ...rest} = routeItem
      const RouteCustom = isAuthRoute ? PrivateRoute : Route
      return (
        <RouteCustom key={index} path={path} exact={exact}>
          <Layout>
            <Component {...rest} />
          </Layout>
        </RouteCustom>
      )
    })}
  </Switch>
)

export default RouterCustom
