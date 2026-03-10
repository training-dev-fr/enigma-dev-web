import { Link } from "react-router"
import "./User.css"

export default function User({user}){
    return (
        <Link to={"/Product/Detail/" + user.id} className="user">
            <div className="picture">
                <img src={user.image} />
            </div>
            <div className="info">
                <div className="name">{user.firstName} {user.lastName}</div>
                <div className="university">{user.university}</div>
                <div className="email">{user.email}</div>
            </div>
        </Link>
    )
}