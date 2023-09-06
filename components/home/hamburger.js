import React from "react";

const Hamburger = ({ isOpen, handleMenuOpen }) => {
  return (
    <nav>
      <button
        onClick={handleMenuOpen}
        className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
      >
        {isOpen ? (
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="block h-6 w-6"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        ) : (
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="block h-6 w-6"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        )}
      </button>
      <div className={isOpen ? "block" : "hidden"}>
        {/* Mobile Menu */}
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-gray-300">
            Services
          </a>
          <a href="#" className="text-gray-300">
            About
          </a>
          <a href="#" className="text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Hamburger;
