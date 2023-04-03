import React from 'react';
import { Link } from 'react-router-dom';
import './Headar.css'

const Headar = () => {
    return (
        <nav>
        <Link to="/">Home</Link>
        <Link to="/friends">Friends</Link>
           
            <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Headar;