export interface RouteItem {
  path: string
  component: React.FC<any>
  isAuthRoute: boolean
  layout?: React.FC
  exact: boolean
}
