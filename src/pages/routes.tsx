import { TodoPage } from "./todo.page"

export interface IRoute {
  path: string
  element: JSX.Element
}

export const RoutesList: Record<string, IRoute> = {
  home: { path: "/", element: <TodoPage></TodoPage> },
}
