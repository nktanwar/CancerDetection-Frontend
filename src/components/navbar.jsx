import React from 'react';

const NavBar = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav
      className={`w-full p-4 shadow-lg ${
        isDarkMode
          ? 'bg-gradient-to-r from-purple-900 to-gray-800'
          : 'bg-gradient-to-r from-purple-600 to-blue-500'
      }`}
    >
      <h1 className="font-extrabold text-3xl text-center text-white">
        Cancer Detection
      </h1>
      <ul className="flex justify-center space-x-8 mt-2">
        <li>
          <a
            href="#"
            className={`${
              isDarkMode ? 'text-white hover:text-gray-300' : 'text-white hover:text-purple-300'
            } transition duration-300`}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`${
              isDarkMode ? 'text-white hover:text-gray-300' : 'text-white hover:text-purple-300'
            } transition duration-300`}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`${
              isDarkMode ? 'text-white hover:text-gray-300' : 'text-white hover:text-purple-300'
            } transition duration-300`}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`${
              isDarkMode ? 'text-white hover:text-gray-300' : 'text-white hover:text-purple-300'
            } transition duration-300`}
          >
            Contact
          </a>
        </li>
      </ul>
      <button
        onClick={toggleTheme}
        className={`mt-4 p-2 rounded ${
          isDarkMode ? 'bg-teal-600 text-white' : 'bg-white text-black'
        } transition duration-300`}
      >
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </nav>
  );
};

export default NavBar;
