import { RouteItem } from "./routeItem.interface";
import Login from "../containers/Login";
import Dashboard from "../containers/Dashboard";
import ListTest from "../containers/ListTest/Index";
import DashboardLayout from "../components/Layout/DashboardLayout";

const routes: RouteItem[] = [
  {
    path: '/login',
    component: Login,
    isAuthRoute: false,
    exact: true
  },
  {
    path: '/sign-up',
    component: Login,
    isAuthRoute: false,
    exact: true
  },

  {
    path: '/',
    layout: DashboardLayout,
    component: Dashboard,
    isAuthRoute: false,
    exact: true
  },
  {
    path: '/list-test',
    layout: DashboardLayout,
    component: ListTest,
    isAuthRoute: false,
    exact: true
  }
]

export default routes
