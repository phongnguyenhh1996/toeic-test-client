import { RouteItem } from "./routeItem.interface";
import Login from "../containers/Login";
import Dashboard from "../containers/Dashboard";
import ListTest from "../containers/ListTest/Index";
import DashboardLayout from "../components/Layout/DashboardLayout";
import CreateTestLayout from "../components/Layout/CreateTestLayout";
import CreateTest from "../containers/CreateTest";
import Statistic from "../containers/Statistic";

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
    isAuthRoute: true,
    exact: true
  },
  {
    path: '/list-test',
    layout: DashboardLayout,
    component: ListTest,
    isAuthRoute: true,
    exact: true
  },
  {
    path: '/create-test',
    layout: CreateTestLayout,
    component: CreateTest,
    isAuthRoute: true,
    exact: true
  },
  {
    path: '/exam',
    layout: CreateTestLayout,
    component: CreateTest,
    isAuthRoute: true,
    exact: true
  }, {
    path: '/statistic',
    layout: DashboardLayout,
    component: Statistic,
    isAuthRoute: true,
    exact: true
  }
]

export default routes
