export interface RouteItem {
  path: string
  component: React.FC
  isAuthRoute: boolean
  layout?: React.FC
  exact: boolean
}
