import { useParams } from "react-router"
import "./Detail.css"

export default function Detail(){
    const {id} = useParams();
    return (
        <>
            Detail
        </>
    )
}