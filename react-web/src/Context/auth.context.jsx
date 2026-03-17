import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const token = localStorage.getItem('token');

    const [auth, setAuth] = useState(token?token:null);
    
    const login = (token) => {
        if(!token){
            throw new Error('empty token');
        }
        localStorage.setItem('token',token);
        setAuth(token);
    }

    const logout = () => {
        localStorage.removeItem('token');
        setAuth(null);
    }

    return (
        <AuthContext.Provider value={{auth, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export {useAuth, AuthProvider};