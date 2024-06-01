import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <Link to="/" className="logo">Logo</Link>
            <nav>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/page1" className="nav-link">Page 1</Link>
                <Link to="/page2" className="nav-link">Page 2</Link>
            </nav>
        </header>
    );
};
