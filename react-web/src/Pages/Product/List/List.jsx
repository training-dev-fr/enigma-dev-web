import { useContext, useEffect, useState } from "react"
import "./List.css"
import User from './../../../Components/User';
import AuthContext from "../../../Context/auth.context";

export default function UserList() {
    const [userList, setUserList] = useState([]);
    const [term, setTerm] = useState("");
    const {auth} = useContext(AuthContext);

    useEffect(() => {
        console.log(auth);
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