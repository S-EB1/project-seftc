// Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import $ from 'jquery';

const Header = () =>{

    //get window size
    const useWindowWidthAndHeight = ()=>{
        let windowInnerSize = [window.innerWidth, window.innerHeight];
        let [ windowSize, setWidowSize ] = useState(windowInnerSize);
        useEffect(()=>{
            const changeWindowSize = ()=>{
                setWidowSize([window.innerWidth, window.innerHeight]);
            }
            window.addEventListener("resize", changeWindowSize);
            return ()=> window.removeEventListener('resize', changeWindowSize);
        }, []);
        return windowSize;
    }
    const [width,height] = useWindowWidthAndHeight();

    // scroll down check
    const [y,setY] = useState(0);
    const handleNavigation = (e) => {
        const window = e.currentTarget;
        setY(window.scrollY);
    };
    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", (e) => handleNavigation(e))
    }, []);

    console.log(height)
    console.log(y)

    // show and hide hamburger menu
    const showHamburgerMenu = () => {
        $(".menu").removeClass('menu-animate-close');
        $(".menu").addClass('menu-animate-open');
    }

    const hideHamburgerMenu = () => {
        $(".menu").removeClass('menu-animate-open');
        $(".menu").addClass('menu-animate-close');
    }

    $('.col').mouseover(() => showHamburgerMenu());
    
    $('.menu').click(() => hideHamburgerMenu());

    let closeTimeout = setTimeout(() => {return}, 1);

    $('.hamburger-menu').mouseleave(() => {
        clearTimeout(closeTimeout);
        closeTimeout = setTimeout(() => hideHamburgerMenu(), 750);
    });

    $('.hamburger-menu').mouseenter(() => {
        clearTimeout(closeTimeout);
    });

    if(window.pageYOffset <= 50 && width > 1000){
        return(
            <header>
                <div className="header-inner">
                    <Link to="Home" smooth={true} className="logo nav-link">
                        HOME
                    </Link>
                    <Link to="Experience" smooth={true} className="logo nav-link">
                        EXPERIENCE
                    </Link>
                    <Link to="Projects" smooth={true} className="logo nav-link">
                        PROJECTS
                    </Link>
                    <Link style={{ border: '2px solid #305042'}} to="Contact" smooth={true} className="logo nav-link">
                        CONTACT
                    </Link>
                </div>
            </header>
        )
    }
    else if(width < 1000){
        return(
            <p class="hamburger-menu" style={{ position: 'fixed', zIndex: 999, width: '13vw', marginLeft: '82vw', marginTop: '2vw' }}>
                <div class="col" style={{ width: '4vw', float: 'right' }}>
                    <div class="con">
                        <div class="bar top"></div>
                        <div class="bar middle"></div>
                        <div class="bar bottom"></div>
                    </div>
                </div>
                <div class="menu">
                    <Link to="Home" smooth={true} className="logo nav-link">
                        HOME
                    </Link>
                    <Link to="Experience" smooth={true} className="logo nav-link">
                        EXPERIENCE
                    </Link>
                    <Link to="Projects" smooth={true} className="logo nav-link">
                        PROJECTS
                    </Link>
                    <Link to="Contact" smooth={true} className="logo nav-link">
                        CONTACT
                    </Link>
                </div>
            </p>
        )
    }
    else{
        return(
            <>
                <header>
                    <div className="header-inner">
                        <Link to="Home" smooth={true} className="logo nav-link">
                            HOME
                        </Link>
                        <Link to="Experience" smooth={true} className="logo nav-link">
                            EXPERIENCE
                        </Link>
                        <Link to="Projects" smooth={true} className="logo nav-link">
                            PROJECTS
                        </Link>
                        <Link style={{ border: '2px solid #305042'}} to="Contact" smooth={true} className="logo nav-link">
                            CONTACT
                        </Link>
                    </div>
                </header>
                <p class="hamburger-menu" style={{ position: 'fixed', zIndex: 999, width: '13vw', marginLeft: '82vw', marginTop: '2vw' }}>
                    <div class="col" style={{ width: '4vw', float: 'right' }}>
                        <div class="con">
                            <div class="bar top"></div>
                            <div class="bar middle"></div>
                            <div class="bar bottom"></div>
                        </div>
                    </div>
                    <div class="menu">
                        <Link to="Home" smooth={true} className="logo nav-link">
                            HOME
                        </Link>
                        <Link to="Experience" smooth={true} className="logo nav-link">
                            EXPERIENCE
                        </Link>
                        <Link to="Projects" smooth={true} className="logo nav-link">
                            PROJECTS
                        </Link>
                        <Link to="Contact" smooth={true} className="logo nav-link">
                            CONTACT
                        </Link>
                    </div>
                </p>
            </>
        )
    }
}

export default Header;