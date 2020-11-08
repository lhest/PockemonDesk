import React from "react";
import './style.scss';

const Header = () => {
    return (
        <header >
            <img src="../../images/logo-left.png" alt="pic"/>
            <ul className={header-top}>
                <li>Home</li>
                <li>Pokédex</li>
                <li>Legendaries</li>
                <li>Documentation</li>
            </ul>
        </header>
    );
};

export default Header;