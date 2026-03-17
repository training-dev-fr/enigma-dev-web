import { NavLink } from "react-router"
import "./Navbar.css"
import { Home, Moon, Sun } from "lucide-react"
import { useTheme } from "../../Context/theme.context"

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className="navbar">
            <div className="link">
                <NavLink className="navlink" to="/"><Home /></NavLink>
                <NavLink className="navlink" to="/Task">Tâches</NavLink>
                <NavLink className="navlink" to="/Add">Ajouter une tâche</NavLink>
            </div>
            <div className="theme-action navlink" onClick={toggleTheme}>
                {theme === "light" &&
                    <Moon />
                }
                {theme === "dark" &&
                    <Sun />
                }
            </div>
        </div>
    )
}