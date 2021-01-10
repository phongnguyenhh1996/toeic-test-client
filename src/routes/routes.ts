import { RouteItem } from "./routeItem.interface";
import Login from "../containers/Login";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../containers/Home";
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
    path: '/',
    layout: MainLayout,
    component: Home,
    isAuthRoute: false,
    exact: true
  },
  {
    path: '/dashboard',
    layout: DashboardLayout,
    component: Dashboard,
    isAuthRoute: false,
    exact: true
  },
  {
    path: '/listtest',
    layout: DashboardLayout,
    component: ListTest,
    isAuthRoute: false,
    exact: true
  }
]

export default routes
