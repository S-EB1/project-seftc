import React from 'react';
import { Parallax } from 'rc-scroll-anim';

const Contact = () =>{
    return(
        <section id="Contact">
            <Parallax animation={{ x: 0, opacity: 1, playScale: [0, 0.6] }} style={{ transform: 'translateX(-9vw)', opacity: 0 }}>
                
            </Parallax>
        </section>
    )
}

export default Contact;