import { RouteItem } from "./routeItem.interface";
import Login from "../containers/Login";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../containers/Home";

const routes: RouteItem[] = [
  {
    path: '/login',
    component: Login,
    isAuthRoute: false,
    exact: true
  },
  {
    path: '/',
    layout: MainLayout,
    component: Home,
    isAuthRoute: true,
    exact: true
  }
]

export default routes
