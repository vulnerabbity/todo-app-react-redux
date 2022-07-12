import { Link } from "react-router-dom"
import { RoutesList } from "../../pages/routes"
import "./header.scss"

export function HeaderComponent() {
  return (
    <header className="header">
      <div className="header__container container">
        <Link className="header__logo" to={RoutesList.home.path}>
          Todo app
        </Link>
      </div>
    </header>
  )
}
