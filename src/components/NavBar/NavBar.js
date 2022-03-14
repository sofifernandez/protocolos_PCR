import "./NavBar.scss"
import "./../../font/stylesheet.css"
import { NavLink } from "react-router-dom";


export const NavBar = () => {
    return (
        <header className="header mb-5">
            <div className="heroline"></div>
            <h1 className="animate__animated animate__swing">Protocolos de Biología Molecular (PSA, INIA-LE)</h1>
            <div className="header-category">
                <NavLink to={'/'} className={({ isActive }) => (isActive ? "activated-link" : "header-links")}>
                    <div className="header-category-tag">
                       Home
                    </div>
                    <div className="header-tag-circle yellow">
                    </div>
                </NavLink>
            </div>
            <div className="header-category">
                <NavLink to={'/type/PCR'} className={({ isActive }) => (isActive ? "activated-link" : "header-links")}>
                    <div className="header-category-tag">
                       PCR
                    </div>
                    <div className="header-tag-circle skyblue">
                    </div>
                </NavLink>
            </div>
            <div className="header-category">
                <NavLink to={'/type/qPCR'} className={({ isActive }) => (isActive ? "activated-link" : "header-links")}>
                    <div className="header-category-tag">
                       qPCR
                    </div>
                    <div className="header-tag-circle red">
                    </div>
                </NavLink>
            </div>
        </header>

    )
}