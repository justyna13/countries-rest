import React, {useContext, useEffect} from "react";
import AppContext from "../context/app/AppContext";


const Navbar = () => {
    const appContext = useContext(AppContext);

    const {theme, toggleTheme} = appContext;

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const handleClick = (e) => {
        toggleTheme();
    }

    return (
        <nav className="navbar">
            <div className="container">
                <h1>Where in the world?</h1>
                <a href="#" onClick={handleClick} className="btn--toggle">
                    <span className={theme === "" ? "far fa-moon": "fas famoon"}> </span>
                    {" "} {theme === "" ? "Dark Mode": "Light Mode"}
                </a>
            </div>
        </nav>
    )
}

export default Navbar;
