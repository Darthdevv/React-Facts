import React,{useState} from "react";
import Header from "./Header";
import Main from "./Main";

function Page() {
    const [darkMode, setDarkMode] = useState(true)
    
    function toggleDarkMode() {
        setDarkMode(prevMode=>!prevMode)
    }
    return (
        <div>
            <Header darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            />
            <Main darkMode={darkMode} />
        </div>
    )
}

export default Page ;