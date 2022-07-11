import { v4 as makeUUID } from "uuid"

export class TodoModel implements ITodoModel {
  id: string
  createdAt: string
  title: string
  text: string
  isFinished: boolean

  constructor(input: TodoModelInput = {}) {
    this.id = makeUUID()

    this.createdAt = new Date().toString()

    this.title = input.title ?? "Todo"

    this.text = input.text ?? "Todo text"

    this.isFinished = input.isFinished ?? false
  }
}

export interface ITodoModel {
  id: string

  createdAt: string

  title: string

  text: string

  isFinished: boolean
}

export type TodoModelInput = Partial<Pick<ITodoModel, "text" | "title" | "isFinished">>
