import { accessStore } from "../../store/store"
import { TodoComponent } from "../todo-item/todo-item"
import "./todo-list.scss"

export function TodoListComponent() {
  const { state } = accessStore()

  return (
    <>
      <ul className="todo-list__list">
        {state.todo.todoList.map(todo => (
          <li className="todo-list__list-item" key={todo.id}>
            <TodoComponent todo={todo}></TodoComponent>
          </li>
        ))}
      </ul>
    </>
  )
}
