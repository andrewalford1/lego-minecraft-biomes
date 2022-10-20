import React from 'react';
import Gallery from '../components/Gallery';
import Showcase from '../components/Showcase';
import About from '../components/About';

function Home() {
    return (
        <div>
            <About/>            
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

export default Home;