import { Home } from "lucide-react"
import "./NavBar.css"
import { Link, NavLink } from "react-router"
import { useAuth } from "../../../Context/auth.context"

export default function NavBar() {
    const { auth, logout } = useAuth();
    return (
        <div className="navbar">
            <NavLink className="link" to="/"><Home /></NavLink>
            {auth && 
                <NavLink className="link" to="#" onClick={() => logout()}>Déconnexion</NavLink>
            }
            {!auth &&
                <NavLink className="link" to="/Login">Connexion</NavLink>
            }
            <NavLink className="link" to="/SignIn">Inscription</NavLink>
            <NavLink className="link" to="/Product">Les produits</NavLink>
        </div>
    )
} 