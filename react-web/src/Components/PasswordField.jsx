import { Eye, EyeOff } from "lucide-react"
import "./PasswordField.css"
import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const PasswordField = forwardRef(({onKeyUp},ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const [error, setError] = useState(false);
    const passwordRef = useRef();

    useImperativeHandle(ref, () => ({
        clear: () => passwordRef.current.value = "",
        reportValidity: (regex) => {
            if(regex.test(passwordRef.current.value)){
                setError(false);
                return true;
            } else{
                setError(true);
                return false;
            }
        },
        getValue: () => passwordRef.current.value
    }),[]);
    return (
        <div className={`password-field ${error?"error":""}`}>
            <input type={isVisible ? "text" : "password"} onKeyUp={(e) => onKeyUp(e.target.value)} ref={passwordRef} />
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
})

export default PasswordField;