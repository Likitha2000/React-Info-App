import React from "react";
import reactlogo from "../logo.jpg";
import '../App.css';

function NavBar(){
    return(
        <div className="navbar-container">
        <img src={reactlogo} alt="react logo" className="navbar-logo"></img>
        <h1>ReactFacts</h1>
        <p className="navbar-header">React Course - Project 1</p>
    </div>
    )
}

export default NavBar;