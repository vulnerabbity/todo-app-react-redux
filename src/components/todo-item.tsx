import { ITodoModel } from "../models/todo"
import { ActionSwitchTodoComplete, ActionDeleteTodo } from "../store/actions/todo"
import { accessStore } from "../store/store"

export interface TodoComponentProps {
  todo: ITodoModel
}

export function TodoComponent({ todo }: TodoComponentProps) {
  const { dispatch } = accessStore()

  function deleteSelf() {
    dispatch(ActionDeleteTodo({ todoId: todo.id }))
  }

  function completeSelf() {
    dispatch(ActionSwitchTodoComplete({ todoId: todo.id }))
  }

  return (
    <div>
      <div>
        <button onClick={completeSelf}>+</button>
      </div>
      <div>
        <p>{todo.title}</p>
        <p>{todo.text}</p>
        <p>{todo.id}</p>
        <p>{String(todo.isFinished)}</p>
      </div>
      <div>
        <button onClick={deleteSelf}>X</button>
      </div>
    </div>
  )
}
