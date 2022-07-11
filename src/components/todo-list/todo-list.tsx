import { accessStore } from "../../store/store"
import { TodoComponent } from "../todo-item/todo-item"
import "./todo-list.scss"

export function TodoListComponent() {
  const { state } = accessStore()

  return (
    <>
      {state.todo.todoList.map(todo => (
        <ul className="todo-list__list">
          <li className="todo-list__list-item">
            <TodoComponent todo={todo} key={todo.id}></TodoComponent>
          </li>
        </ul>
      ))}
    </>
  )
}
