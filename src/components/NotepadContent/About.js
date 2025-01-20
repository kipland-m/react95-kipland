import React from 'react';
import aboutData from '../../data/about.json';

function About() {
    const { content } = aboutData; // Extract the "content" object from "aboutData"
    const { paragraphs } = content; // Extract "paragraphs" from "content"
 
    return (
        <div>
            <h2>Kip</h2>
            {paragraphs.map((p, i) => (
                <p key={i}>{p}</p> // Render each paragraph
            ))}
        </div>
    );
}

export default About;

