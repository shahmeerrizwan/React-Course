import React from 'react';
import Slider from './Slider';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Team from './Team';
import Menu from './Menu';

function Home() {
    return (
        <div>
            <Slider />
            <About />
            <Services />
            <Menu />
            <Team />
            <Contact />
        </div>
    );
}
export default Home;