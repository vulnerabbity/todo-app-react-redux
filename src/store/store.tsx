import { ReactNode } from "react"
import { createStore } from "redux"
import { rootReducer } from "./reducers"
import { Provider as ReduxProvider } from "react-redux"

export function createRootStore() {
  return createStore(rootReducer)
}

export function RootStoreProvider({ children }: { children: ReactNode }) {
  const store = createRootStore()

  return <ReduxProvider store={store}>{children}</ReduxProvider>
}
