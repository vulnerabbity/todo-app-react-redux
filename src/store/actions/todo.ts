import { TodoModel } from "../../models/todo"
import { IActionWithPayload } from "./interface"

type TodoPayload = { todo: TodoModel }

export class AddTodo implements IActionWithPayload {
  readonly type = "ADD_TODO"
  constructor(public readonly payload: TodoPayload) {}
}

export type AnyTodoAction = AddTodo
