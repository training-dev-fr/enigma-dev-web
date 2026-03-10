import { useEffect, useState } from "react"
import "./List.css"
import User from './../../../Components/User';

export default function UserList() {
    const [userList, setUserList] = useState([]);
    const [term, setTerm] = useState("");

    useEffect(() => {
        fetch('https://dummyjson.com/users/search?q=' + term)
            .then(res => res.json())
            .then(data => setUserList(data.users));
    }, [term]);
    return (
        <div className="user-list">
            <input type="text" onKeyUp={e => setTerm(e.target.value)}/>
            {userList.map(user => <User user={user} key={"user" + user.id} />)}
        </div>
    )
}