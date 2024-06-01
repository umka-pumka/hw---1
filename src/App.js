import React from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/Main/HomePage';
import Page1 from './components/Main/Page1';
import Page2 from './components/Main/Page2';

export default function App() {
    return (
        <Router>
            <Header />
            
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/page1" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
            </Routes>
        </Router>
    );
};
