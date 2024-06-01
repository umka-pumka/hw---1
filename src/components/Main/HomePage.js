import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
    return (
        <div className="home">
            <h1 style={{ fontSize: '2em' }}>HomePage</h1>
            <nav className="nav-container">
                <Link to="/page1" className="nav">Page 1</Link>
                <Link to="/page2" className="nav">Page 2</Link>
            </nav>
        </div>
    );
};
