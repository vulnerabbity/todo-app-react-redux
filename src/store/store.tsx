import { ReactNode } from "react"
import { createStore } from "redux"
import { rootReducer } from "./reducers"
import { Provider as ReduxProvider, useDispatch, useSelector } from "react-redux"

export function createRootStore() {
  return createStore(rootReducer)
}

const store = createRootStore()

export function RootStoreProvider({ children }: { children: ReactNode }) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>
}

export type RootStateType = ReturnType<typeof store.getState>

export type RootDispatcherType = typeof store.dispatch

export interface AccessStoreReturnType {
  state: RootStateType
  dispatch: RootDispatcherType
}

export function accessStore(): AccessStoreReturnType {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const state = useSelector((state: RootStateType) => state)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch()

  return {
    state,
    dispatch,
  }
}
