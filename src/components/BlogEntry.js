import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

function BlogEntry() {
    return (
        <div>
            <LoremIpsum p={1} startWithLoremIpsum={false}/>
        </div>
    );
}

export default BlogEntry;