import { NavLink } from "react-router"
import "./Navbar.css"
import { Home } from "lucide-react"

export default function Navbar() {
    return (
        <div className="navbar">
            <NavLink to="/"><Home /></NavLink>
            <NavLink to="/Task">Tâches</NavLink>
            <NavLink to="/Add">Ajouter une tâche</NavLink>
        </div>
    )
}