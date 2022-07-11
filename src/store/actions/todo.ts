import { TodoModel } from "../../models/todo"
import { makeAction } from "./actions"

export type AddTodoPayload = { todo: TodoModel }
export type DeleteTodoPayload = { todoId: TodoModel["id"] }

export const ActionAddTodo = makeAction("ADD_TODO", (type: AddTodoPayload) => {})
export const ActionDeleteTodo = makeAction("DELETE_SINGLE_TODO", (type: DeleteTodoPayload) => {})
export const ActionDeleteAllTodo = makeAction("DELETE_ALL_TODO")

export type AnyTodoAction = ReturnType<
  typeof ActionAddTodo | typeof ActionDeleteTodo | typeof ActionDeleteAllTodo
>
