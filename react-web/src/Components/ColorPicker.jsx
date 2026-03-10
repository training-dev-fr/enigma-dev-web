import { useState } from "react"
import "./ColorPicker.css"

export default function ColorPicker() {
    const [color, setColor] = useState("FFFFFF")
    return (
        <div className="color-picker">
            {color.length === 6 &&
                <div className="color" style={{ backgroundColor: "#" + color }}></div>
            }
            {color.length !== 6 &&
                <div className="error">Couleur invalide</div>
            }
            <input type="text" onKeyUp={(e) => setColor(e.target.value)} />
        </div>
    )
}