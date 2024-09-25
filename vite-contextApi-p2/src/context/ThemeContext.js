import React, { useContext,createContext } from "react";


export const ThemeContext = createContext({
    darkMode: false,
    setDarkMode: () => {}
});

export const ThemeContextProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext)
}
