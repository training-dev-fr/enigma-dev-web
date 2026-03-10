import { Outlet } from "react-router"
import "./Layout.css"
import NavBar from "../../Components/NavBar/Product/NavBar"

export default function Layout(){
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}