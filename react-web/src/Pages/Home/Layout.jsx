import { Outlet } from "react-router"
import NavBar from "../../Components/NavBar/Home/NavBar"
import "./Layout.css"

export default function Layout(){
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}