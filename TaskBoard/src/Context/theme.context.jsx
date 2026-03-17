import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({children}) => {
    const themeStorage = localStorage.getItem('theme');
    const [theme, setTheme] = useState(themeStorage ? themeStorage : "light");

    const toggleTheme = () => {
        localStorage.setItem("theme",theme === "light"?"dark":"light")
        setTheme(currentValue => currentValue === "light"?"dark":"light");
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export {useTheme, ThemeProvider};