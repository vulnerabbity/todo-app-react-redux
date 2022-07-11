import { ITodoModel } from "../../models/todo"
import { AnyTodoAction } from "../actions/todo"

export interface TodoSate {
  todoList: ITodoModel[]
}

export function todoReducer(state: TodoSate = { todoList: [] }, action: AnyTodoAction) {
  const { todoList } = state

  const { type, payload } = action

  if (type === "ADD_TODO") {
    return { ...state, todoList: [...todoList, payload.todo] }
  }

  if (type === "DELETE_SINGLE_TODO") {
    const idToDelete = payload.todoId
    const newTodoList = state.todoList.filter(todo => todo.id !== idToDelete)

    return { ...state, todoList: newTodoList }
  }

  if (type === "DELETE_ALL_TODO") {
    return { ...state, todoList: [] }
  }

  if (type) return state
}
