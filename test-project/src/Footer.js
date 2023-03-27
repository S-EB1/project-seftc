import React from 'react';
import { Link } from 'react-scroll';

const Footer = () =>{
    return(
        <footer id="Footer">
           <Link style={{ height: '7vh', marginTop: '0.26vw' }} to="Home" smooth={true} className="logo nav-link">
                <span class="tertiary-text-color">TO THE TOP</span>
            </Link>
        </footer>
    )
}

export default Footer;