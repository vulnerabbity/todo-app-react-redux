import { AddTodoComponent } from "../components/add-todo/add-todo"
import { TodoListComponent } from "../components/todo-list/todo-list"
import { ActionDeleteAllCompletedTodo, ActionDeleteAllTodo } from "../store/actions/todo"
import { accessStore } from "../store/store"
import "./todo.page.scss"

export function TodoPage() {
  const { dispatch, state } = accessStore()

  function deleteAll() {
    dispatch(ActionDeleteAllTodo())
  }

  function deleteAllFinished() {
    dispatch(ActionDeleteAllCompletedTodo())
  }

  const haveTodo = state.todo.todoList.length > 0

  return (
    <div className="todo-page">
      <div className="todo-page__container container">
        <section className="todo-page__section">
          <div className="todo-page__section-header">
            <h2 className="todo-page__section-title">Add todo</h2>
          </div>
          <AddTodoComponent></AddTodoComponent>
        </section>
        {haveTodo && (
          <section className="todo-page__section">
            <div className="todo-page__section-header">
              <h2 className="todo-page__section-title">Todo list: </h2>
              <div className="todo-page__buttons-group">
                <button className="button" onClick={deleteAll}>
                  Delete all
                </button>
                <button className="button" onClick={deleteAllFinished}>
                  Delete finished
                </button>
              </div>
            </div>
            <TodoListComponent></TodoListComponent>
          </section>
        )}
      </div>
    </div>
  )
}
