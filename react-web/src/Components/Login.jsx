import { useRef, useState } from "react";
import "./Login.css"
import PasswordField from "./PasswordField"

export default function Login() {
    const passwordRef = useRef();
    const emailRef = useRef();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleReset = () => {
        emailRef.current.value = "";
        passwordRef.current.clear();
    }

    const handleConnect = () => {
        if(!passwordRef.current.reportValidity(/[a-zA-Z0-9]{6,}/)){
            alert("Format de mot de passe invalide : " + passwordRef.current.getValue())
        } 
    }
    return (
        <div className="login">
            <div className="form-group">
                <label>Email</label>
                <input type="email" id="email" ref={emailRef} onKeyUp={() => setEmail(emailRef.current.value)}/>
            </div>
            <div className="form-group">
                <label> Mot de passe</label>
                <PasswordField ref={passwordRef} onKeyUp={setPassword} />
            </div>
            <button onClick={handleConnect}>Connexion</button>
            <button onClick={handleReset}>Réinitialiser</button>
        </div>
    )
}