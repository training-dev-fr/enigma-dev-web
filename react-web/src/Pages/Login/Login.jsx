import { useContext, useRef, useState } from "react";
import "./Login.css"
import PasswordField from "../../Components/PasswordField";
import { Link, useNavigate } from "react-router";
import AuthContext from "../../Context/auth.context";

export default function Login() {
    const {setAuth} = useContext(AuthContext);
    const passwordRef = useRef();
    const emailRef = useRef();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleReset = () => {
        emailRef.current.value = "";
        passwordRef.current.clear();
    }

    const handleConnect = () => {
        if(!passwordRef.current.reportValidity(/[a-zA-Z0-9]{6,}/)){
            return alert("Format de mot de passe invalide : " + passwordRef.current.getValue())
        }
        setAuth("123aze456ert789iop");
        navigate("/Product")
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
            <Link to="/SignIn">Pas encore de compte?</Link>
            <button onClick={handleConnect}>Connexion</button>
            <button onClick={handleReset}>Réinitialiser</button>
        </div>
    )
}