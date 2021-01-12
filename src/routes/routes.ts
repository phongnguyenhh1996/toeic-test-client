import { RouteItem } from "./routeItem.interface";
import Login from "../containers/Login";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../containers/Home";
import Dashboard from "../containers/Dashboard";
import ListTest from "../containers/ListTest/Index";
import DashboardLayout from "../components/Layout/DashboardLayout";
import CreateTestLayout from "../components/Layout/CreateTestLayout";
import CreateTest from "../containers/CreateTest";

const routes: RouteItem[] = [
  {
    path: '/login',
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
  },
  {
    path: '/create-test',
    layout: CreateTestLayout,
    component: CreateTest,
    isAuthRoute: false,
    exact: true
  }
]

export default routes
