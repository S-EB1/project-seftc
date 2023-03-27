import React from 'react';
import { Parallax } from 'rc-scroll-anim';

const Projects = () =>{
    return(
        <section id="Projects">
            <Parallax animation={{ x: 0, opacity: 1, playScale: [0, 0.9] }} style={{ transform: 'translateX(-9vw)', opacity: 0 }}>

            </Parallax>
        </section>
    )
}

export default Projects;