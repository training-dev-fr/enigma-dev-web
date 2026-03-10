import { useRef } from "react";
import "./Login.css"
import PasswordField from "./PasswordField"

export default function Login() {
    const passwordRef = useRef();
    const emailRef = useRef();

    const handleReset = () => {
        emailRef.current.value = "";
        passwordRef.current.value = "";
    }
    return (
        <div className="login">
            <div className="form-group">
                <label>Email</label>
                <input type="email" id="email" ref={emailRef} />
            </div>
            <div className="form-group">
                <label> Mot de passe</label>
                <PasswordField ref={passwordRef} />
            </div>
            <button>Connexion</button>
            <button onClick={handleReset}>Réinitialiser</button>
        </div>
    )
}