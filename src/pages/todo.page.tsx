import { AddTodoComponent } from "../components/add-todo/add-todo"
import { TodoListComponent } from "../components/todo-list/todo-list"

export function TodoPage() {
  return (
    <div>
      <div className="container">
        <AddTodoComponent></AddTodoComponent>
        <TodoListComponent></TodoListComponent>
      </div>
    </div>
  )
}
