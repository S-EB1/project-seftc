import React from 'react';
import Header from './Header';
import Home from './Home';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const App = ()=>{
  return(
    <div>
        <Header/>
        <Home/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App;