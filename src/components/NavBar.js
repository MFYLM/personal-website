import React, { useState } from "react";
import "./NavBar.css";


function NavBar() {


    return (
        <nav className="navbar">
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#Experiences">Experiences</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
    );
};


export default NavBar;