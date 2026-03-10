import "./User.css"

export default function User({user}){
    return (
        <div className="user">
            <div className="picture">
                <img src={user.image} />
            </div>
            <div className="info">
                <div className="name">{user.firstName} {user.lastName}</div>
                <div className="university">{user.university}</div>
                <div className="email">{user.email}</div>
            </div>
        </div>
    )
}