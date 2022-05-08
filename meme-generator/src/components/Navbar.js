import React from "react";
import logoImg from "../images/logo.png"

const Navbar = (props) => {
    const { title, subtitle } = props;

    return(
        <>
            <nav className="navbar">
                <section className="navbar-main">
                    <img src={logoImg} alt="logo" className="navbar-img"/>
                    <h3 className="navbar-text nav-title">{title}</h3>
                </section>
                
                <h4 className="navbar-text nav-subtitle">{subtitle}</h4>
            </nav>
        </>
    );
};

export default Navbar;