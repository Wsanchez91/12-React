import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
    return (
        <nav>
            <NavLink to="/" end>About Me</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/resume">Resume</NavLink>
        </nav>
    );
};

export default Navigation;
