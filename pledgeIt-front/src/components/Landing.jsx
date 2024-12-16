import 'react';
import volunteer1 from '../assets/volunteer1.avif'; // Adjust the path as needed
import volunteer2 from '../assets/volunteer2.avif';
import volunteer3 from '../assets/volunteer3.avif';
import volunteer4 from '../assets/volunteer4.jpg';

const volunteers = [volunteer1, volunteer2, volunteer3, volunteer4];

const Landing = () => {
  return (
    <div className="relative">
      {/* Top Bar with Sign Up Prompt */}
      <div className="absolute top-6 right-6 text-sm text-red-600 font-semibold z-10">
        <p>
          Ready to make an impact?{' '}
          <a href="#signup" className="underline">
            Sign up now!
          </a>
        </p>
      </div>

      {/* Top Left PledgeIt Text */}
      <div className="absolute top-6 left-6 text-xl font-extrabold text-red-600 z-10">
        PledgeIt
      </div>

      {/* Main Hero Section */}
      <div className="bg-white min-h-screen flex flex-col md:flex-row items-center px-6 md:px-16 py-16 space-y-16 md:space-y-0">
        {/* Left Section */}
        <div className="flex-1 space-y-8 text-center md:text-left animate-fadeIn">
          <h1 className="text-6xl md:text-7xl font-extrabold text-red-800 leading-tight">
            Empower Communities, <br /> Transform Lives
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-lg mx-auto md:mx-0">
            Join our platform to explore volunteering opportunities that align
            with your skills and passions. Together, we can make a difference.
          </p>
          <div className="flex justify-center md:justify-start space-x-6">
            <button
              className="bg-red-600 text-white py-4 px-10 rounded-full text-lg font-bold hover:bg-red-800 transition-transform transform hover:scale-105 shadow-lg"
              aria-label="Get Started"
            >
              Get Started
            </button>
            <button
              className="bg-transparent text-red-600 border-2 border-red-600 py-4 px-10 rounded-full text-lg font-bold hover:bg-red-800 hover:text-white transition shadow-lg"
              aria-label="Explore Opportunities"
            >
              Explore Opportunities
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 grid grid-cols-2 gap-8 mt-12 md:mt-0 animate-fadeIn">
          {volunteers.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Volunteer ${index + 1}`}
              className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover shadow-lg hover:scale-105 transform transition-transform duration-500"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
