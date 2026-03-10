import { Home } from "lucide-react"
import "./NavBar.css"
import { Link, NavLink } from "react-router"

export default function NavBar() {
    return (
        <div className="navbar">
            <NavLink className="link" to="/Product/">Les produits</NavLink>
            <NavLink className="link" to="/Product/Form">Nouveau</NavLink>
        </div>
    )
} 