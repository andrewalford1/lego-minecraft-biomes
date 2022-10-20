import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';

function App() {
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
        <Route exact path='/' element={<Home/>} />
        <Route exact path="/Blog" element={<Blog/>} />
      </Routes>
    </div>
  );
}

export default App;
