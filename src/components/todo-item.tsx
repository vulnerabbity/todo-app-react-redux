import { ITodoModel } from "../models/todo"
import { ActionSwitchTodoComplete, ActionDeleteTodo } from "../store/actions/todo"
import { accessStore } from "../store/store"
import "./todo-item.scss"

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
    <div className="todo-item">
      <div className="todo-item__vertical-center todo-item__column">
        <input
          type="checkbox"
          defaultChecked={todo.isFinished}
          onClick={completeSelf}
          aria-label="complete todo"
        ></input>
      </div>
      <div className="todo-item__content">
        <p className="todo-item__title">{todo.title}</p>
        <p className="todo-item__text">{todo.text}</p>
      </div>
      <div className="todo-item__vertical-center todo-item__column">
        <button onClick={deleteSelf} aria-label="delete todo">
          X
        </button>
      </div>
    </div>
  )
}
