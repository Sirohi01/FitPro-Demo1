import React from "react";
import { Link } from "react-router-dom";
import { FaDumbbell } from "react-icons/fa";

const Header = () => {
    return (
        <header className="header">
        <h1><FaDumbbell /> FitPro Trainer</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/transformation">Transformation</Link>
            <Link to="/hiit">HIIT Training</Link>
            <Link to="/measurements">Measurements</Link>
            <Link to="/contact">Contact Us</Link>
        </nav>
        </header>
    );
};

export default Header;