import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HeaderComponent } from "../components/header/header"
import { RoutesList } from "../pages/routes"

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent></HeaderComponent>
      <Routes>
        <Route {...RoutesList.home}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
