import { ChangeEvent, useState } from "react"
import { TodoModel } from "../../models/todo"
import { ActionAddTodo } from "../../store/actions/todo"
import { accessStore } from "../../store/store"
import "./add-todo.scss"

export function AddTodoComponent() {
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const { dispatch } = accessStore()

  function addIfOk() {
    const trimmedTitle = title.trim()
    if (trimmedTitle.length === 0) {
      return
    }

    dispatch(ActionAddTodo({ todo: createTodo() }))
    resetText()
  }

  function resetText() {
    setText("")
    setTitle("")
  }

  function createTodo() {
    return new TodoModel({ text, title })
  }

  function syncTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  function syncText(event: ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value)
  }

  return (
    <form className="add-todo content" onSubmit={e => e.preventDefault()}>
      <div>
        <input
          className="add-todo__title-input content-inner-focus add-todo__input"
          value={title}
          onChange={syncTitle}
          type="text"
          placeholder="Title"
        ></input>
      </div>
      <div>
        <textarea
          className="add-todo__multiline content-inner-focus add-todo__input"
          value={text}
          onChange={syncText}
          rows={3}
          placeholder="Text"
        ></textarea>
      </div>
      <div className="justify-end">
        <button className="add-todo__submit-button end button" onClick={addIfOk} type="button">
          Create
        </button>
      </div>
    </form>
  )
}
