import { accessStore, RootStateType } from "./store"

export class AppStateLocalStorage {
  private static readonly storageKey = "redux-store"

  static save(state: RootStateType) {
    try {
      const stringifiedState = JSON.stringify(state)

      localStorage.setItem(this.storageKey, stringifiedState)
    } catch (error: unknown) {
      console.error("Cant save state: " + error)
    }
  }

  static getFromStorage() {
    const stringifiedStorage = localStorage.getItem(this.storageKey)
    if (stringifiedStorage === null) {
      return undefined
    }

    const parsed = JSON.parse(stringifiedStorage)

    return parsed
  }
}
