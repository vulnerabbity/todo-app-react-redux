export interface IActionWithPayload<T = unknown> {
  type: string
  payload: T
}
