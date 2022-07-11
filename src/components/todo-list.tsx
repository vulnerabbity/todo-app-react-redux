import { accessStore } from "../store/store"
import { TodoComponent } from "./todo-item"

export function TodoListComponent() {
  const { state } = accessStore()

  return (
    <>
      {state.todo.todoList.map(todo => (
        <TodoComponent todo={todo}></TodoComponent>
      ))}
    </>
  )
}
