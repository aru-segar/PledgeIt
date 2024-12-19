import React from 'react';
import About from 'components/About';
import Hero from 'components/Hero';
import Sectors from 'components/Sectors';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <About />
            <Sectors />
        </div>
    );
}

export default HomePage;