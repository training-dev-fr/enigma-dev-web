import { useRef, useState } from "react"
import "./ColorPicker.css"

export default function ColorPicker() {
    const [color, setColor] = useState("FFFFFF");
    const colorRef = useRef();

    const handleColorPick = () => {
        setColor(colorRef.current.value);
    }
    return (
        <div className="color-picker">
            {color.length === 6 &&
                <div className="color" style={{ backgroundColor: "#" + color }}></div>
            }
            {color.length !== 6 &&
                <div className="error">Couleur invalide</div>
            }
            <input type="text" ref={colorRef} onKeyUp={handleColorPick} />
        </div>
    )
}