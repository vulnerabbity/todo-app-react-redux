import { Icons } from "../../assets/icons/icons"
import { ITodoModel } from "../../models/todo"
import { ActionSwitchTodoComplete, ActionDeleteTodo } from "../../store/actions/todo"
import { accessStore } from "../../store/store"
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
      <div className="todo-item__column">
        <input
          className="todo-item__checkbox todo-checkbox"
          id={todo.id}
          type="checkbox"
          defaultChecked={todo.isFinished}
          onClick={completeSelf}
          aria-label="complete todo"
        ></input>
        <label className="todo-checkbox__label" htmlFor={todo.id}>
          <img
            className="todo-item__icon todo-checkbox__checked"
            src={Icons.checked}
            alt="checked checkbox"
          />
          <img
            className="todo-item__icon todo-checkbox__unchecked"
            src={Icons.unchecked}
            alt="unchecked checkbox"
          />
        </label>
      </div>
      <div className="todo-item__content">
        <h3 className="todo-item__title">{todo.title}</h3>
        {todo.text && <p className="todo-item__text">{todo.text}</p>}
      </div>
      <div className="todo-item__vertical-center todo-item__column">
        <button className="button button_square" onClick={deleteSelf} aria-label="delete todo">
          <img className="todo-item__icon" src={Icons.close} alt="close" />
        </button>
      </div>
    </div>
  )
}
