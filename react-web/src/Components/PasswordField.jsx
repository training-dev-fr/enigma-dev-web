import { Eye, EyeOff } from "lucide-react"
import "./PasswordField.css"
import { useState } from "react";

export default function PasswordField({ref}) {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="password-field">
            <input ref={ref} type={isVisible ? "text" : "password"} />
            <div className="icon" onClick={() => setIsVisible(!isVisible)}>
                {isVisible &&
                    <Eye />
                }
                {!isVisible &&
                    <EyeOff />
                }
            </div>
        </div>
    )
}