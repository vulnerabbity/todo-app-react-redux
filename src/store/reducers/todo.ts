import { ITodoModel } from "../../models/todo"
import { AnyTodoAction } from "../actions/todo"

export interface TodoSate {
  todoList: ITodoModel[]
}

export function todoReducer(state: TodoSate = { todoList: [] }, action: AnyTodoAction) {
  const { todoList } = state

  const type = action.type
  const payload = action.payload

  if (type === "ADD_TODO") {
    return { ...state, todoList: [...todoList, payload.todo] }
  }

  return state
}
