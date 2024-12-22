import BackgroundImage from '../../assets/3.jpg';
import 'react';

const Hero = () => {
    return (
        <section 
            className="bg-cover bg-center text-right py-60 px-10 w-full"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            <h2 className="text-4xl font-bold text-white text-left px-20">
                "Empowering Hands,<br /> Building Stronger Communities"
            </h2>
            <div className="mt-6 flex justify-start space-x-5 px-20">
                <button className="bg-red-500 text-white px-6 py-2 rounded-md">
                    Find Opportunities
                </button>
                <button className="bg-red-500 text-white px-6 py-2 rounded-md">
                    Organize an Event
                </button>
            </div>
        </section>
    );
};

export default Hero;