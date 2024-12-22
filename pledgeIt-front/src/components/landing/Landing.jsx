import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import volunteer1 from '../../assets/volunteer1.avif'; // Adjust the path as needed
import volunteer2 from '../../assets/volunteer2.avif';
import volunteer3 from '../../assets/volunteer3.avif';
import volunteer4 from '../../assets/volunteer4.jpg';

const volunteers = [volunteer1, volunteer2, volunteer3, volunteer4];

const Landing = () => {
  const navigate = useNavigate(); // Create a navigate function to change routes

  const handleGetStarted = () => {
    navigate("/HomePage"); // Navigate to HomePage when the button is clicked
  };

  return (
    <div className="relative">
      {/* Top Bar with Sign Up Prompt */}
      <motion.div
        className="absolute top-6 right-6 text-sm text-red-600 font-semibold z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p>
          Ready to make an impact?{' '}
          <a href="#signup" className="underline">
            Sign up now!
          </a>
        </p>
      </motion.div>

      {/* Top Left PledgeIt Text */}
      <motion.div
        className="absolute top-6 left-6 text-xl font-extrabold text-red-600 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        PledgeIt
      </motion.div>

      {/* Main Hero Section */}
      <div className="bg-white min-h-screen flex flex-col md:flex-row items-center px-6 md:px-16 py-16 space-y-16 md:space-y-0">
        {/* Left Section */}
        <motion.div
          className="flex-1 space-y-8 text-center md:text-left animate-fadeIn"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-6xl md:text-7xl font-extrabold text-red-800 leading-tight">
            Empower Communities, <br /> Transform Lives
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-lg mx-auto md:mx-0">
            Join our platform to explore volunteering opportunities that align
            with your skills and passions. Together, we can make a difference.
          </p>
          <motion.button
            className="bg-red-600 text-white py-6 px-12 rounded-full text-2xl font-bold hover:bg-red-800 transition-transform transform hover:scale-105 shadow-lg w-full md:w-72"
            aria-label="Get Started"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={handleGetStarted} // Handle button click to navigate
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="flex-1 grid grid-cols-2 gap-8 mt-12 md:mt-0 animate-fadeIn"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {volunteers.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Volunteer ${index + 1}`}
              className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover shadow-lg hover:scale-105 transform transition-transform duration-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
