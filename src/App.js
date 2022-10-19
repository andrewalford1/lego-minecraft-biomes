import React from 'react';
import './App.css';
import About from './components/About/About.js';
import BlogEntry from './components/BlogEntry/BlogEntry';
import Gallery from './components/Gallery/Gallery';
import Showcase from './components/Showcase/Showcase';

function App() {
  return (
    <div>
      <h2>Lego Minecraft Biomes</h2>
      
      <About/>

      <h3>Next showing</h3>
      TBD.

      <h3>Blog</h3>
      <BlogEntry/>
      <BlogEntry/>
      <BlogEntry/>

      <h3>Gallery</h3>
      <Gallery/>

      <h3>Biome vote</h3>
      <div>
        <Showcase/>
        <Showcase/>
        <Showcase/>
      </div>
    </div>

  );
}

export default App;
