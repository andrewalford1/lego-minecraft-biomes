import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';

const PageSelection = () => (
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/Blog" element={<Blog />} />
    </Routes>
);

export default PageSelection;