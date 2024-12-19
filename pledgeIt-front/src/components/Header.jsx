import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
    return (
      <header className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-500">Pledgelt</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-red-500">Home</Link>
          <Link to="/VolunteerCategories" className="text-gray-600 hover:text-red-500">Events</Link>
          <a href="#organizations" className="text-gray-600 hover:text-red-500">Organizations</a>
        </nav>
        <div className="flex items-center">
          <span className="text-sm text-gray-500">SukhithaPr</span>
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full ml-4"
          />
        </div>
      </header>
    );
  };
  
  export default Header;
  