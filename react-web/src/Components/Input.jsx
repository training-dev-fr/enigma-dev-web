import { useState } from "react"
import "./Input.css"

export default function Input(){
    const [value, setValue] = useState("")
    return (
        <>
            <input type="text" style={{borderColor: value !== ""?'blue':'red'}} onKeyUp={(e) => setValue(e.target.value)} />
        </>
    )
}