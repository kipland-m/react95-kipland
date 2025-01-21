import React from 'react';
import aboutData from '../../data/about.json';

function About() {
    const { content } = aboutData; 
    const { paragraphs } = content; 

    return (
        <div>
            <h2>Kip</h2>
            {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>  
            ))}
        </div>
    );
}

export default About;

