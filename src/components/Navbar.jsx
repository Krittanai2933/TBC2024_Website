import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logoTBC from "../assets/logoTBC.png";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <Link to="/" className="title">
                <img src={logoTBC} alt="logo" className="image_logo" />
            </Link>

            {/* Menu Icon */}
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/agenda">Agenda</NavLink>
                </li>
                <li>
                    <NavLink to="/speakers">Speakers</NavLink>
                </li>
                <li>
                    <NavLink to="/sponsor">Sponsor</NavLink>
                </li>
                <li>
                    <NavLink to="/gallery">Gallery</NavLink>
                </li>
                <li>
                    <NavLink id="highlight" to="/">Ticket</NavLink>
                </li>
            </ul>
        </nav>
    );
};
