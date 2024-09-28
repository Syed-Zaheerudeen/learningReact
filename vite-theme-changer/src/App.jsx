import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import useTheme, { ThemeContext, ThemeContextProvider } from "./context/ThemeContext";

function App() {

  const {darkMode} = useTheme();
  const [theme,setTheme] = useState(darkMode);
  
  const setDarkMode = (val) => {
    return setTheme(val);
  }
  
  useEffect(() => {
    
    let root = document.getElementById('root');     
    root.classList.remove('dark');

    if(theme) {
       root.classList.add('dark');
    } 


 }, [theme]);


  return (
    <ThemeContextProvider value={{darkMode: theme,setDarkMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
