import React from 'react';
import Gallery from '../components/Gallery/Gallery';
import Showcase from '../components/Showcase/Showcase';

function Home() {
    return (
        <div>
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