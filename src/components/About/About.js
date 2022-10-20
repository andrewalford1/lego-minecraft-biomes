import React from 'react';

const link = "https://www.youtube.com/c/CheeseyStudios/featured";

function About() {
    return (
        <div>
            Inspired by the creator <a href={link} rel="noreferrer noopener" target="_blank">Cheesey Studios</a>, 
            Lego Minecraft Biomes is my own interpreation of the Minecraft
            world explores the diverse regions of the game. Use this webpage
            to view the model, read up on it's latest state and vote on it's
            future development. 
        </div>
    );
}

export default About;