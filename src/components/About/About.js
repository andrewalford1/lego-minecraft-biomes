import React from 'react';
import Link from '../Link/Link';

function BuildLink() {
    const href = "https://www.youtube.com/c/CheeseyStudios/featured";
    const text = "Cheesey Studios";

    return <Link href={href} text={text} />
}

function About() {
    return (
        <div>
            Inspired by the creator {BuildLink()},
            Lego Minecraft Biomes is my own interpreation of the Minecraft
            world explores the diverse regions of the game. Use this webpage
            to view the model, read up on it's latest state and vote on it's
            future development.
        </div>
    );
}

export default About;