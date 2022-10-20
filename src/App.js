import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PageSelection from './PageSelection';

function App() {
  return (
    <div>
      <h1>Lego Minecraft Biomes</h1>
      
      <Navigation/>
      <hr/>

      <PageSelection />

      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
