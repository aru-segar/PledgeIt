import 'react';
import About from './About';
import Hero from './Hero';
import Sectors from './Sectors';
import Features from './Features';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Sectors />
            <About />
            <Features />
        </div>
    );
}

export default HomePage;