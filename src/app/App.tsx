import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { TodoPage } from "../pages/todo.page"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header"></header>
        <Routes>
          <Route path="/" element={<TodoPage></TodoPage>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
