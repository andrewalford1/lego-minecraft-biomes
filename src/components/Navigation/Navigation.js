import React from "react";
import Home from '../../pages/Home';
import Blog from '../../pages/Blog';
import { Routes, Route, Link } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Blog">Blog</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path="/Blog" element={<Blog />} />
            </Routes>
        </div>
    );
}

export default Navigation;