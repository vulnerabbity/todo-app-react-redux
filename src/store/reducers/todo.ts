import { ITodoModel } from "../../models/todo"
import { AnyTodoAction } from "../actions/todo"

export interface TodoSate {
  todoList: ITodoModel[]
}

export const initialTodoState: TodoSate = {
  todoList: [],
}

export function todoReducer(state: TodoSate = initialTodoState, action: AnyTodoAction): TodoSate {
  const { todoList } = state

  const { type, payload } = action

  if (type === "ADD_TODO") {
    return { ...state, todoList: [payload.todo, ...todoList] }
  }

  if (type === "DELETE_SINGLE_TODO") {
    const idToDelete = payload.todoId
    const newTodoList = state.todoList.filter(todo => todo.id !== idToDelete)

    return { ...state, todoList: newTodoList }
  }

  if (type === "DELETE_ALL_TODO") {
    return { ...state, todoList: [] }
  }

  if (type === "SWITCH_TODO_COMPLETE") {
    const item = state.todoList.find(todo => todo.id === payload.todoId)

    if (item) {
      item.isFinished = !item.isFinished
    }

    return { ...state }
  }

  return state
}
