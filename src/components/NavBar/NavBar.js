import "./NavBar.scss"
import "./../../font/stylesheet.css"
import { NavLink } from "react-router-dom";


export const NavBar = () => {
    return (
        <header className="header mb-5">
            <div className="heroline"></div>
            <h1 className="animate__animated animate__swing">Protocolos de Biología Molecular (PSA, INIA-LE)</h1>
            <div className="header-category">
                <div className="header-links">
                    <div className="header-category-tag">
                        <NavLink to={'/'}>Home</NavLink>
                    </div>
                    <div className="header-tag-circle yellow">
                    </div>
                </div>
            </div>

            <div className="header-category">
                <a href="#ui-kits" className="header-links">
                    <div className="header-category-tag">
                        PCR
                    </div>
                    <div className="header-tag-circle skyblue">
                    </div>
                </a>
            </div>
            
            <div className="header-category">
                <a href="#ui-kits" className="header-links">
                    <div className="header-category-tag">
                        qPCR
                    </div>
                    <div className="header-tag-circle red">
                    </div>
                </a>
            </div>
        </header>

    )
}